const router = require('express').Router()
const { signupUser, loginUser } = require('../controllers/userController')
const {createResume} = require('')

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.post('/resume',)

module.exports = router