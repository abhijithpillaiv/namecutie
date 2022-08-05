var express = require('express');
var router = express.Router();
var userHelper = require("../helpers/userHelper")
const nodemailer = require("nodemailer");
const { response } = require('express');
var jwt = require('jsonwebtoken');
var collection = require('../config/collection');
var handlebars = require('handlebars');
const fs = require("fs")

// Get all Names

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
router.get('/getNames/:name/:id',((req,res)=>{
  console.log('in');
  userHelper.getSingleName(req.params.id).then((response)=>{
    res.send(response)
  })
}))
// Get single name
router.get('/getNamesv2/:name',((req,res)=>{
  userHelper.getSingleNamev2(req.params.name).then((response)=>{
    res.send(response)
  })
}))

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

// Get  Notice
router.get('/getNotice',((req,res)=>{
  userHelper.getNotice().then((response)=>{
    res.send(response)
  })
}))

// Set message
router.post('/setMessage',((req,res)=>{
  userHelper.setMessage(req.body).then((response)=>{
    res.send(response)
  })
}))

// Get Ads
router.get('/getAds',((req,res)=>{
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
