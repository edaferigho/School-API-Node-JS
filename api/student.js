const express = require('express')
const Students = require('../model/Students')

const router = express.Router();


router.get('/',(req, res)=> {
    res.render('studentlist',{students:Students})
})

router.get('/result/:examId',(req, res)=> {
    const id = req.params.examId
    console.log(id)
    let foundStudent = Students.find((student) => {
        
        return student.examId == id
        
    })
    if (!foundStudent) {
        console.log('Record not found')
    }
    res.render('result', { student: foundStudent })
    
})


module.exports = router