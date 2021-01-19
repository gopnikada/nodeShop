const express = require('express')
const exhbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.set('view engine', 'hbs')

app.engine('hbs', exhbs({
    extname:'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname+'/views/layouts'
}))

app.use(express.static(path.join(__dirname, 'src')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.render('index', {layout:'mainLayout'})
})
app.get('/input', (req,res)=>{
    res.render('input', {layout:'mainLayout'})
})
app.post('/input', (req,res)=>{
    res.send(req.body.age)
})

app.listen(3000)