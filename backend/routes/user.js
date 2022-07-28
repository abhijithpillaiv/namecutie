var express = require('express');
const recipeHelper = require('../helpers/recipeHelper');
var router = express.Router();
var userHelper = require("../helpers/userHelper")
const nodemailer = require("nodemailer");
const { response } = require('express');
var jwt = require('jsonwebtoken');
var collection = require('../config/collection');
var handlebars = require('handlebars');
const fs = require("fs")

// Get all Names

router.get('/names',((req,res)=>{
  recipeHelper.getNames().then((response)=>{
    res.send(response)
  })
}))

// Get Blog
router.get('/blog',((req,res)=>{
  userHelper.getBlog().then((response)=>{
    res.send(response)
  })
}))

// Get  Notice
router.get('/notice',((req,res)=>{
  userHelper.getNotice().then((response)=>{
    res.send(response)
  })
}))

// Set message
router.post('/message',((req,res)=>{
  userHelper.setMessage(req.body).then((response)=>{
    res.send(response)
  })
}))

// Get Ads
router.get('/ads',((req,res)=>{
  userHelper.getAds().then((response)=>{
    res.send(response)
  })
}))

// Add like
router.post('/like',((req,res)=>{
  userHelper.setLike(req.body).then((response)=>{
    res.send(response)
  })
}))

module.exports = router;
