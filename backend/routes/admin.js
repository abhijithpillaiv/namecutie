var express = require('express');
const fs = require("fs")
var router = express.Router();
const userHelper = require('../helpers/userHelper')
var adminHelper = require('../helpers/adminHelper')
var collection = require("../config/collection");
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
var handlebars = require('handlebars');
const multer = require("multer");

// Multer
const storage = multer.diskStorage({
  destination: ((req, file, cb) => {
    cb(null, './public/image/');
  }),
  filename: ((req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  })

})
const upload = multer({ storage: storage })

//////////////////////////////////////// Section name

// Add Name
router.post('/addName', function (req, res) {
  adminHelper.addName(req.body).then((response) => {
    res.json(response)
  })
});

// edit Name
router.post('/editName', function (req, res) {
  adminHelper.editName(req.body).then((response) => {
    res.json(response)
  })
});
// Delete Name
router.get('/deleteName/:id', function (req, res) {
  try {
    adminHelper.deleteName(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});
// Get Names

router.get('/getNames/:gender',((req,res)=>{
  userHelper.getName(req.params.gender).then((response)=>{
    res.send(response)
  })
}))
// Get Names by alphabet

router.get('/getNames/alphabet/:char',((req,res)=>{
  userHelper.getNameAlpha(req.params.char).then((response)=>{
    res.send(response)
  })
}))

// Get single name
router.get('/getName/:id',((req,res)=>{
  userHelper.getSingleName(req.params.id).then((response)=>{
    res.send(response)
  })
}))


/////////////////////////////////////////////////// section notice

// Add Notice
router.post('/addNotice', function (req, res) {
  adminHelper.addNotice(req.body).then((response) => {
    res.json(response)
  })
});

// edit Notice
router.post('/editNotice', function (req, res) {
  adminHelper.editNotice(req.body).then((response) => {
    res.json(response)
  })
});
// Delete Notice
router.get('/deleteNotice/:id', function (req, res) {
  try {
    adminHelper.deleteNotice(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});
// Get  Notice
router.get('/getNotice',((req,res)=>{
  userHelper.getNotice().then((response)=>{
    res.send(response)
  })
}))
// GEt single notice
router.get('/getSingleNotice/:id',((req,res)=>{
  userHelper.getSingleNotice(req.params.id).then((response)=>{
    res.send(response)
  })
}))


/////////////////////////////////////////// section message

// Get message
router.get('/getMessage', function (req, res) {
  adminHelper.getMessage().then((response) => {
    res.json(response);
  })
});
// Delete Message
router.get('/deleteMessage/:id', function (req, res) {
  adminHelper.deleteMsg(req.params.id).then((response) => {
    res.json(response);
  })
});

//////////////////////////////////////////// section blog

// Add Blog
router.post('/addBlog',upload.single('image'), function (req, res) {
  if (req.file != undefined) {
    const arrayOfStrings = req.file.path.split('/')
    req.body.image = arrayOfStrings[2]
  }
  adminHelper.addBlog(req.body).then((response) => {
    res.json(response)
    console.log(response);
  })
});

// edit Blog
router.post('/editBlog', function (req, res) {
  adminHelper.editBlog(req.body).then((response) => {
    res.json(response._id)
  })
});
// Delete Blog
router.get('/deleteBlog/:id', function (req, res) {
  try {
    adminHelper.deleteBlog(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});
// Get Blog
router.get('/getBlog',((req,res)=>{
  userHelper.getBlog().then((response)=>{
    res.send(response)
  })
}))
// Get single Blog
router.get('/getBlog/:id',((req,res)=>{
  userHelper.getSingleBlog(req.params.id).then((response)=>{
    res.send(response)
  })
}))


/////////////////////////////////////////////// section ads

// Get Ads
router.get('/getAds',((req,res)=>{
  userHelper.getAds().then((response)=>{
    res.send(response)
  })
}));
// Add Ads
router.post('/addAds', function (req, res) {
  adminHelper.addAds(req.body).then((response) => {
    res.json(response)
  })
});
// Delete Ads
router.get('/deleteAds/:id', function (req, res) {
  try {
    adminHelper.deleteAds(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});


module.exports = router;
