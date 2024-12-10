
var express = require('express')
var router = express.Router()
const { list, create, updateUser, deleteUser } = require('../service/userService'); // Adjusted path

var validate = require('../middleware/validation')


router.get('/list', list)
router.post('/create/:age', create)
router.put('/update/:id', updateUser)
router.delete('/delete/:age', deleteUser)

module.exports = router