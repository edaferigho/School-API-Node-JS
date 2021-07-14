const express = require('express')
const Staffs = require('../model/Staffs')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('stafflist',{staffs:Staffs})
})


module.exports = router