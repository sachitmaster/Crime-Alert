var express = require('express');
var router = express.Router();
const userModel = require('./users');
const LocalStrategy = require('passport-local')
const passport = require('passport');

passport.use(new LocalStrategy(userModel.authenticate()))

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get('/map', isLoggedIn, function (req, res) {
  res.render('map');
});

router.get('/community', isLoggedIn, function (req, res) {
  res.render('community');
});

router.get('/signup', function (req, res) {
  res.render('signup');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/hotel', isLoggedIn, function (req, res) {
  res.render('hotel');
});

router.get('/add', function (req, res) {
  res.render('add');
});

router.post('/create', isLoggedIn, async function (req, res, next){
  const user = await communityModel.findOne({username: req.session.passport.user})
  const post = await communityModel.create({
    title: req.body.title,
    content: req.body.content,
    user: user._id,
  })
  user.posts.push(post._id)
  await user.save() 
  res.redirect('/create') 
});

// register route
router.post('/register', function (req, res) {

  // console.log("" + req.body)

  const userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
  })

  // const uname = req.body.username
  // console.log(userdata)

  userModel.register(userdata, req.body.password)
    .then(function (registereduser) {

      // console.log("Registered user data: " + registereduser)
      // console.log("password" + req.body.password)

      passport.authenticate('local')(req, res, function () {
        res.redirect('/community')
      })
    })
    .catch(function (err) {
      console.log("If error occure: " + err)
    })
})

  // login
  router.post('/login', passport.authenticate('local', {
    successRedirect: '/community',
    failureRedirect: '/'
  }), function (req, res) {
    // const uname = req.body.username
  })

  // IsLoggedIn Middleware
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/signup')
  }

  module.exports = router;