
var express = require('express')
var router = express.Router()
const { list, create } = require('../service/userService'); // Adjusted path

var validate = require('../middleware/validation')


router.get('/list', list)
router.post('/create/:age', create)

module.exports = router