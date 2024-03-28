const express = require('express')
const passport = require('passport')
const googlePassprt = require('./../passport')
const userController = require('./../controllers/controller')
const router = express.Router()


router.use(passport.initialize())
router.use(passport.session())


router.route('/')
.get(userController.loadAuth)

router.route('/success')
.get(userController.successGoogleLogin)

router.route('/failure')
.get(userController.failureLogin)


router.get('/auth/google' , passport.authenticate('google' , {
    scope : ['email', 'profile']
}))


router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect : '/success',
    failureRedirect : '/failure'

}))

module.exports = router