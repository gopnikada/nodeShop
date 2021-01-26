const express = require('express')
const exhbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const pg = require('pg')
const { Pool } = require('pg')

app.set('view engine', 'hbs')

app.engine('hbs', exhbs({
    extname:'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname+'/views/layouts'
}))
app.use(express.urlencoded({ extended: true }))

const pool = new Pool({
    user: 'postgres',
    database: 'shop',
    host: 'localhost',
    password: 'postgres',
    port: 5432,
})

// const  itemsList = [
//     {
//         id:1,
//         name:'iPhone',
//         count:0,
//         image:'/img/iphone.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:2,
//         name:'Samsung',
//         count:5,
//         image:'/img/samsung.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:3,
//         name:'Htc',
//         count:10,
//         image:'/img/htc.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:4,
//         name:'iPhone2',
//         count:15,
//         image:'/img/iphone2.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:5,
//         name:'Samsung2',
//         count:20,
//         image:'/img/samsung2.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:6,
//         name:'Htc2',
//         count:17,
//         image:'/img/htc2.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:7,
//         name:'Nokia',
//         count:15,
//         image:'/img/nokia.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:8,
//         name:'Blackberry',
//         count:0,
//         image:'/img/bb.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:9,
//         name:'Sony ericson',
//         count:17,
//         image:'/img/se.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'phone',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:10,
//         name:'Lenovo A1',
//         count:0,
//         image:'/img/lenovo.png',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'notebook',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:11,
//         name:'Acer B5',
//         count:5,
//         image:'/img/acer.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'notebook',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:12,
//         name:'PowerPc XL',
//         count:10,
//         image:'/img/pc.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'pc',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:13,
//         name:'MacPro',
//         count:15,
//         image:'/img/macpro.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'pc',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:14,
//         name:'Sony walkman b12',
//         count:20,
//         image:'/img/walkman.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'mp3',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:15,
//         name:'Apple iPod3',
//         count:17,
//         image:'/img/ipod.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'mp3',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:16,
//         name:'Intel Pentium1',
//         count:15,
//         image:'/img/pentium.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'cpu',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:17,
//         name:'AMD Athlon',
//         count:0,
//         image:'/img/athlon.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'cpu',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
//     {
//         id:18,
//         name:'Intel xeon',
//         count:17,
//         image:'/img/xeon.jpg',
//         link: function (){
//             return '/items/' + this.id
//         },
//         cat:'cpu',
//         descr: {
//             country: "China",
//             display: "1920x1080 AMOLED",
//             review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
//         }
//     },
// ]


let orders = []

let itemsToShow = []

app.use(express.static(path.join(__dirname, 'src')))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.render('index', {layout:'mainLayout'})
})
// app.get('/items', (req,res)=>{
//     itemsToShow.length==0
//         ?itemsToShow=itemsList
//         :itemsToShow = itemsList.filter(item=>item.cat==req.query.optVal)//todo
//     res.render('items',
//         {
//             layout:'mainLayout',
//             title:"Items",
//             items: itemsToShow,
//
//         })
// })
app.get('/items', async (req,res)=>{
    pool.on('error', (err)=>{
        console.error(err)
        process.exit(-1)
    })
    pool.connect((err, client, done)=>{
        let rq
        console.log(req.query.optVal)
        if(req.query.optVal == undefined ||req.query.optVal == 'Allitems' ){
            rq = `SELECT * FROM items`
        }else{
            rq = `SELECT * FROM items WHERE cat='${req.query.optVal}'`
        }
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
// app.get('/basket', (req,res)=>{
//     res.render('basket',
//             {
//                 layout:'mainLayout',
//                 title: 'Basket',
//                 orders: orders,
//                 count: 5,
//             })
// })
app.get('/basket', async (req,res)=>{
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
                res.render('basket', {layout: 'mainLayout', orders: result.rows})
            }
        })
    })
})
// app.post('/basket', (req,res)=>{
//     orders.push(new Object(itemsList[req.body.getIdInput-1]))
//     if(req.body.orderToDelete!=null){
//         orders.splice(orders.indexOf(itemsList[req.body.orderToDelete-1]), 1)
//         orders = orders.filter(value => Object.keys(value).length !== 0)
//     }
//     console.log(orders)
//     res.render('basket',
//         {
//             layout:'mainLayout',
//             title: 'Basket',
//             orders: orders,
//             count: 5
//         })
//
// })
app.post('/basket', (req,res)=>{
        pool.connect((err, client, done)=>{
            if(err) return console.error(err)

            client.query(`INSERT INTO orders (itemId, count) values 
                ( (SELECT id FROM items WHERE id=$1), $2)
                 on conflict (itemId) DO
                 UPDATE SET 
                 count = orders.count + $2
                 returning *`,//todo
                [req.body.getIdInput, req.body.getCountInput])
            done()
            res.redirect("/basket")
        })
    }
)
app.listen(process.env.PORT||3030)