const express = require('express');
const Admin = require('../model/admin')

const router = express.Router();


router.get('/', (req, res) => {
    res.json(Admin)
})

module.exports = router


