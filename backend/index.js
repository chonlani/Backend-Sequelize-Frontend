const db = require('./models')
const express = require('express'); //import Express มาใช้งาน
const app = express();              //เป็นการสร้าง express app ขึ้นมา
// Express จัดการ http request

const studentRoutes= require('./routes/student')

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use('/student', studentRoutes);

db.sequelize.sync().then(() => {    //สั่งให้ sequelize ไป sync Database ให้ตรงกับ Moduls หรือตาราง ของเรา
app.listen(8000, () => (   //เป็นการกำหนด port ของเรา
    //เอา Express App ที่เราสร้างขึ้นมา ไปจัดการ http request ที่ port 8000
    console.log(`Server is running on port 8000`)
));  
})

// **ตัวอย่างการเรียก Port**
// app.get('/hello', (req, res) => {
//     res.send("hello world");
// })

// app.post('/hello', (req, res) => {
//     res.send("hello world / post")
// })

// app.post('/add', (req, res) => {   
//     const a = Number(req.body.a);
//     const b = Number(req.body.b);

//     res.send({ result: a + b });
// })