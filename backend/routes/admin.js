var express = require('express');
const fs = require("fs")
var router = express.Router();
var userHelper = require('../helpers/userHelper')
var adminHelper = require('../helpers/adminHelper')
var collection = require("../config/collection");
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
var handlebars = require('handlebars');
const userHelper = require('../helpers/userHelper');


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
// Get all Names

router.get('/getNames',((req,res)=>{
  userHelper.getName().then((response)=>{
    res.send(response)
  })
}))

// Get single name
router.get('/getNames/:id',((req,res)=>{
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
router.post('/addBlog', function (req, res) {
  adminHelper.addBlog(req.body).then((response) => {
    res.json(response._id)
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

// Add Ads
router.post('/addAds', function (req, res) {
  adminHelper.addAds(req.body).then((response) => {
    res.json(response)
  })
});
// edit Ads
router.post('/editAds', function (req, res) {
  adminHelper.editAds(req.body).then((response) => {
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
