const express = require('express')
const exhbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const pg = require('pg')
const { Pool } = require('pg')
const jwt = require('jsonwebtoken')

let loggedIn = null
app.set('view engine', 'hbs')

app.engine('hbs', exhbs({
    extname:'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname+'/views/layouts'
}))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

const pool = new Pool({
    user: 'postgres',
    database: 'shop',
    host: 'localhost',
    password: 'postgres',
    port: 5432,
})

let orders = []

let itemsToShow = []

let userName

app.use(express.static(path.join(__dirname, 'src')))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.render('index', {layout:'mainLayout'})
})

app.get('/items', async (req,res)=>{
    // We can obtain the session token from the requests cookies, which come with every request
    const token = req.cookies.token

    // if the cookie is not set, return an unauthorized error
    if (!token) {
        return res.status(401).end()
    }

    var payload
    try {
        payload = jwt.verify(token, jwtKey)
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error thrown is because the JWT is unauthorized, return a 401 error
            return res.status(401).end()
        }
        // otherwise, return a bad request error
        return res.status(400).end()
    }

    // Finally, return the welcome message to the user, along with their
    // username given in the token
    loggedIn = payload.username
    //res.send(`Welcome ${payload.username}!`)
    pool.on('error', (err)=>{
        console.error(err)
        process.exit(-1)
    })
    pool.connect((err, client, done)=>{
        let rq
        console.log(req.query.optVal)
        if(req.query.optVal == undefined ||req.query.optVal == 'Allitems' ){
            rq = `SELECT * FROM items ORDER BY id ASC`
        }else{
            console.log('category: '+req.query.optVal)
            rq = `SELECT * FROM items WHERE cat='${req.query.optVal}' ORDER BY id ASC`
        }
        console.log(loggedIn.toString())
        if ( err ) throw err
        client.query(rq, (err, result)=>{
            done()
            if (err){
                console.log(err.stack)
            }else{
                console.log('connected')
                for( o of result.rows){
                    o.link = '/items/'+o.id
                }
                res.render('items', {layout: 'mainLayout', items: result.rows})
            }
        })
    })
})


app.get('/search', async (req,res)=>{
    let qr = `SELECT * FROM items WHERE LOWER(name) LIKE LOWER('%${req.query.searchField}%');`
    pool.on('error', (err)=>{
        console.error(err)
        process.exit(-1)
    })
    pool.connect((err, client, done)=>{
        if ( err ) throw err
        client.query(qr, (err, result)=>{
            done()
            if (err){
                console.log(err.stack)
            }else{
                console.log(req.query.searchField, result.rows)
                res.render('search', {layout: 'mainLayout', foundItems: result.rows})
            }
        })
    })
})

app.get('/items/:id', async (req,res)=>{
    pool.on('error', (err)=>{
        console.error(err)
        process.exit(-1)
    })
    pool.connect((err, client, done)=>{
        let qr = `SELECT * FROM items WHERE id=${req.params.id}`
        if ( err ) throw err
        client.query(qr, (err, result)=>{
            done()
            if (err){
                console.log(err.stack)
            }else{
               res.render('item', {layout: 'mainLayout', item: result.rows[0]})
            }
        })
    })
})

app.get('/basket', async (req,res)=>{
    console.log(loggedIn)
    pool.on('error', (err)=>{
        console.error(err)
        process.exit(-1)
    })
    pool.connect((err, client, done)=>{
        if ( err ) throw err
        client.query(`SELECT orders.id, orders.itemId, orders.count, items.name, items.image
        FROM orders
        JOIN items ON items.id=orders.itemId`, (err, result)=>{
            done()
            if (err){
                console.log(err.stack)
            }else{
                console.log(result.rows)
                res.render('basket', {layout: 'mainLayout', orders: result.rows, loggedIn: loggedIn})
            }
        })
    })
})

app.post('/basket', async (req,res)=>{

        pool.connect((err, client, done)=>{
            if(err) return console.error(err)

            client.query(`                 
                 UPDATE items
                SET count = count-$2    
                WHERE id=$1;
                `,[req.body.getIdInput, req.body.getCountInput] )
            client.query(`               
                 INSERT INTO orders (itemId, count, userName) values
                ( (SELECT id FROM items WHERE id=$1), $2, '${loggedIn}')
                 on conflict (itemId) DO
                 UPDATE SET
                 count = orders.count + $2
                 returning *;
                 `,
                [req.body.getIdInput, req.body.getCountInput])
            done()
            res.redirect("/basket")
        })
    }
)
app.post('/basket/:id', (req,res)=>{
    pool.connect((err, client, done)=>{
        if(err) return console.error(err)
        client.query(`UPDATE items    
                    SET count = count+(select count from orders where id=${req.params.id})   
                    WHERE   
                    id=(select itemid from orders where id=${req.params.id});`)

        client.query('DELETE FROM orders WHERE id=$1 returning *', [req.params.id])


        console.log('on delete')
        done()
        res.redirect('/basket')
    })
})
const users = {
    user1: 'password1',
    user2: 'password2'
}

const jwtKey = 'my_secret_key'
const jwtExpirySeconds = 5000

app.post('/signin', (req, res) => {
    // Get credentials from JSON body
    const { username, password } = req.body
    if (!username || !password || users[username] !== password) {
        // return 401 error is username or password doesn't exist, or if password does
        // not match the password in our records
        return res.status(401).end()
    }

    // Create a new token with the username in the payload
    // and which expires 300 seconds after issue
    const token = jwt.sign({ username }, jwtKey, {
        algorithm: 'HS256',
        expiresIn: jwtExpirySeconds
    })
    console.log('token:', token)
    userName = username
    // set the cookie as the token string, with a similar max age as the token
    // here, the max age is in milliseconds, so we multiply by 1000
    res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
    res.redirect('/')
    res.end()
})
app.get('/login', (req,res)=>{
    res.render('login', {layout:'mainLayout'})
})
app.post('/logout', (req,res)=>{
    res.clearCookie('token');
    res.redirect('/')
})

app.post('/buy', (req,res)=>{

})
app.listen(process.env.PORT || 3030)