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