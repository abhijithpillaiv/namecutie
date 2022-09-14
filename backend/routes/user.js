var express = require('express');
var router = express.Router();
var userHelper = require("../helpers/userHelper")
const nodemailer = require("nodemailer");
const { response } = require('express');
var jwt = require('jsonwebtoken');
var collection = require('../config/collection');
var handlebars = require('handlebars');
const fs = require("fs")

// search name
router.post('/searchName', ((req, res) => {
  if (req.body.gender.length===0) {
    req.body.gender = ['Boy', 'Girl', 'Unisex']
  }
  userHelper.searchName(req.body).then((response) => {
    res.send(response)
  })
}))
// Get all ethnic 

router.get('/getEthni', ((req, res) => {
  userHelper.getethi().then((response) => {
    res.send(response)
  })
}))
// Get all Names

router.get('/getNames/:gender', ((req, res) => {
  userHelper.getName(req.params.gender).then((response) => {
    res.send(response)
  })
}))
// Get Names by alphabet

router.get('/getNames/alphabet/:char', ((req, res) => {
  userHelper.getNameAlpha(req.params.char).then((response) => {
    res.send(response)
  })
}))
// Get Names by ethnic

router.get('/getNames/ethnic/:char', ((req, res) => {
  userHelper.getNameEth(req.params.char).then((response) => {
    res.send(response)
  })
}))

// Get single name
router.get('/getNames/:name/:id', ((req, res) => {
  userHelper.getSingleName(req.params.id).then((response) => {
    res.send(response)
  })
}))
// Get single name
router.get('/getNamesv2/:id', ((req, res) => {
  userHelper.getSingleNamev2(req.params.id).then((response) => {
    res.send(response)
  })
}))

// Get Blog
router.get('/getBlog', ((req, res) => {
  userHelper.getBlog().then((response) => {
    res.send(response)
  })
}))
// Get single Blog
router.get('/getBlog/:id', ((req, res) => {
  userHelper.getSingleBlog(req.params.id).then((response) => {
    res.send(response)
  })
}))

// Get  Notice
router.get('/getNotice', ((req, res) => {
  userHelper.getNotice().then((response) => {
    res.send(response)
  })
}))

// Set message
router.post('/setMessage', ((req, res) => {
  userHelper.setMessage(req.body).then((response) => {
    res.send(response)
  })
}))

// Get Ads
router.get('/getAds', ((req, res) => {
  userHelper.getAds().then((response) => {
    res.send(response)
  })
}))
// Get Ads
router.get('/getMeta', ((req, res) => {
  userHelper.getMeta().then((response) => {
    res.send(response)
  })
}))

// Add like
router.post('/like', ((req, res) => {
  console.log(req.body);
  userHelper.setLike(req.body).then((response) => {
    res.send(response)
  })
}))
router.get('/getlike/:id', ((req, res) => {
  userHelper.getLike(req.params.id).then((response) => {
    console.log(response);
    res.send(response)
  })
}))

module.exports = router;
