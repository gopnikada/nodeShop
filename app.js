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

const itemsList = [
    {
        id:1,
        name:'iPhone',
        count:0,
        image:'/img/iphone.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:2,
        name:'Samsung',
        count:5,
        image:'/img/samsung.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:3,
        name:'Htc',
        count:10,
        image:'/img/htc.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:4,
        name:'iPhone2',
        count:15,
        image:'/img/iphone2.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:5,
        name:'Samsung2',
        count:20,
        image:'/img/samsung2.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:6,
        name:'Htc2',
        count:17,
        image:'/img/htc2.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:7,
        name:'Nokia',
        count:15,
        image:'/img/nokia.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:8,
        name:'Blackberry',
        count:0,
        image:'/img/bb.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
    {
        id:9,
        name:'Sony ericson',
        count:17,
        image:'/img/se.jpg',
        link: function (){
            return '/items/' + this.id
        },
        descr: {
            country: "China",
            display: "1920x1080 AMOLED",
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto blanditiis, enim neque perspiciatis quo repellendus reprehenderit. Aperiam esse ex inventore magni nulla odio quos ullam vel vero voluptatibus. Accusamus, aliquid asperiores beatae culpa delectus doloremque earum eius eligendi enim est et excepturi hic impedit ipsum itaque laboriosam nisi nulla, obcaecati possimus, quibusdam quidem saepe sit tempore? Animi delectus dignissimos doloremque earum et facere non placeat praesentium quis, voluptatibus! Aspernatur autem eaque error itaque, maiores rerum. Delectus eos facere illum laudantium minus placeat sint temporibus vel veritatis, voluptatum? Accusantium ad aliquam debitis dignissimos incidunt laborum magni obcaecati quis repudiandae veniam?'
        }
    },
]

let orders = [

]

const order = function (){
    console.log(12)
}

app.use(express.static(path.join(__dirname, 'src')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.render('index', {layout:'mainLayout'})
})
app.get('/items', (req,res)=>{
    res.render('items', {layout:'mainLayout', title:"Items", items: itemsList})
    //console.log(a)
})
app.post('/search', (req,res)=>{
    let regex = new RegExp(`${req.body.searchField}`, 'i')
    res.render('search', {
        layout:'mainLayout',
        title:"Search post",
        foundItems:itemsList.filter(o=> o.name.match(regex))})
})
app.get('/items/:id',(req, res)=>{
    res.render('item', {
        layout:'mainLayout',
        title: itemsList[req.params.id-1].name,
        item: itemsList[req.params.id-1]
    })
})
app.get('/basket', (req,res)=>{
    res.render('basket',
            {
                layout:'mainLayout',
                title: 'Basket',
                orders: orders,
                count: 5
            })
})
app.post('/basket', (req,res)=>{
    orders.push(new Object(itemsList[req.body.getIdInput-1]))
    res.render('basket',
        {
            layout:'mainLayout',
            title: 'Basket',
            orders: orders,
            count: 5
        })
})
app.listen(3000)