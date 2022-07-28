var express = require('express');
const fs = require("fs")
var router = express.Router();
var recipeHelper = require('../helpers/recipeHelper')
var adminHelper = require('../helpers/adminHelper')
var collection = require("../config/collection");
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
var handlebars = require('handlebars');


//////////////////////////////////////// Section name

// Add Name
router.post('/addName', function (req, res) {
  adminHelper.addName(req.body).then((response) => {
    res.json(response._id)
  })
});

// edit Name
router.post('/editName', function (req, res) {
  adminHelper.editName(req.body).then((response) => {
    res.json(response._id)
  })
});
// Delete Name
router.get('/deleteName/:id', function (req, res) {
  try {
    recipeHelper.deleteName(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});


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
    res.json(response._id)
  })
});
// Delete Notice
router.get('/deleteNotice/:id', function (req, res) {
  try {
    recipeHelper.deleteNotice(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});


/////////////////////////////////////////// section message

// Get message
router.get('/getMessage', function (req, res) {
  adminHelper.getMessage().then((response) => {
    res.json(response);
  })
});
// Delete Message
router.get('/dltMsg/:id', function (req, res) {
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
    recipeHelper.deleteBlog(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});

/////////////////////////////////////////////// section ads

// Add Ads
router.post('/addAds', function (req, res) {
  adminHelper.addAds(req.body).then((response) => {
    res.json(response._id)
  })
});
// edit Ads
router.post('/editAds', function (req, res) {
  adminHelper.editAds(req.body).then((response) => {
    res.json(response._id)
  })
});
// Delete Ads
router.get('/deleteAds/:id', function (req, res) {
  try {
    recipeHelper.deleteAds(req.params.id).then((response) => {
      res.json(response)
    })
  } catch (error) {
    res.json(error)
  }
});

/////////////////////////////////// section likes

router.get('/getLike', function (req, res) {
  adminHelper.getLike().then((response) => {
    res.json(response);
  })
});

////////////////////////////////////////////// section dashboard

// Dashboard
router.get('/dashboard', function (req, res) {
  adminHelper.dashboard().then((resp) => {
    res.json(resp);
  })
});

module.exports = router;
