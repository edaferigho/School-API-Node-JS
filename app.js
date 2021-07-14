const express = require('express')

const app = express()


//Initializing the router
const studentRoute = require('./api/student')
const staffRoute = require('./api/Staff')
const adminRoute = require('./api/admin')

app.use('/api/students', studentRoute)
app.use('/api/staffs',staffRoute)
app.use('/api/admin', adminRoute)

//Setting the ejs engine
app.set('view engine', 'ejs')
app.use('/public',express.static('./views/public'))




app.get('/',(req, res)=> {
    res.render('index')
})


app.listen(9000, () => {
    console.log('School server is running at 127.0.0.1:9000')
})