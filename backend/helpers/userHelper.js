const promise = require('promise');
var db = require('../config/connection')
var bcrypt = require('bcrypt');
var collection = require('../config/collection');
const { ObjectID } = require('bson');
const { resolve, reject } = require('promise');
const { response } = require('express');

module.exports = {
    
    // Name
    getName: () => {
        return new promise(async (resolve, reject) => {
            let Name = await db.get().collection(collection.name).find().toArray()
            resolve(Name)
        })
    },

    // Get Blog
    getBlog: () => {
        return new promise(async (resolve, reject) => {
            let Blog = await db.get().collection(collection.blog).find().toArray()
            resolve(Blog)
        })
    },

    // Set message
    setMessage: (data) => {
        return new promise(async (resolve, reject) => {
            db.get().collection(collection.message).insertOne(data).then(() => {
                resolve('Message sent sucessfully')
            })
        })
    },

    // Notice
    getNotice: () => {
        return new promise(async (resolve, reject) => {
            let Notice = await db.get().collection(collection.notice).find().toArray()
            resolve(Notice)
        })
    },  
    
      // Ads
      getAds: () => {
        return new promise(async (resolve, reject) => {
            let Ads = await db.get().collection(collection.Ads).find().toArray()
            resolve(Ads)
        })
    },

    // like
    setLike: (data) => {
        return new promise(async (resolve, reject) => {
            try {
               let name= await db.get().collection(collection.name).findOne({_id:ObjectID(data.id)});
               var old_like=name.like;
                db.get().collection(collection.name).updateOne({ "_id": ObjectID(data.id) }, {
                    $set: {
                        like:old_like+1
                    }
                }).then(() => {
                    resolve('Like updated Sucessfully')
                })
            } catch (error) {
                resolve(error)
            }
        })
    },
}