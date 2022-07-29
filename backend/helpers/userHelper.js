const promise = require('promise');
var db = require('../config/connection')
var bcrypt = require('bcrypt');
var collection = require('../config/collection');
const { ObjectID } = require('bson');
const { resolve, reject } = require('promise');
const { response } = require('express');

module.exports = {
    
    // Name
    getName: (gender) => {
        return new promise(async (resolve, reject) => {
            let Name = await db.get().collection(collection.name).find({'gender': gender}).toArray()
            resolve(Name)
        })
    },
        // Name by alphabet
        getNameAlpha: (char) => {
            return new promise(async (resolve, reject) => {
                let Name = await db.get().collection(collection.name).find({"name": {$regex: '^' + char, $options: 'i'}}).toArray()
                resolve(Name)
            })
        },

    // Get single name
    getSingleName: (id) => {
        return new promise(async (resolve, reject) => {
            let Name = await db.get().collection(collection.name).findOne({_id:ObjectID(id)})
            resolve(Name);
        })
    },


    // Get Blog
    getBlog: () => {
        return new promise(async (resolve, reject) => {
            let Blog = await db.get().collection(collection.blog).find().toArray()
            resolve(Blog)
        })
    },
        // Get single blog
        getSingleBlog: (id) => {
            return new promise(async (resolve, reject) => {
                let blog = await db.get().collection(collection.blog).findOne({_id:ObjectID(id)}).toArray()
                resolve(blog);
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
    setLike: (id) => {
        return new promise(async (resolve, reject) => {
            try {
               let name= await db.get().collection(collection.name).findOne({_id:ObjectID(id)});
               var old_like=name.like;
                db.get().collection(collection.name).updateOne({ "_id": ObjectID(id) }, {
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