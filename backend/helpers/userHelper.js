const promise = require('promise');
var db = require('../config/connection')
var bcrypt = require('bcrypt');
var collection = require('../config/collection');
const { ObjectID } = require('bson');
const { resolve, reject } = require('promise');
const { response } = require('express');

module.exports = {


    // search name
    searchName: (data) => {
        return new promise(async (resolve, reject) => {
            console.log(data);
            let pattern = "^" + data.firstn + ".*" + data.lastn + "$"
            let name = []
            if (data.firstn && !data.lastn) {
                name = await db.get().collection(collection.name).find({ "ethni": { $in: data.eth }, 'gender': { $in: data.gender }, "name": { $regex: '^' + data.firstn, $options: 'i' } }).toArray()
            }
            else if (!data.firstn && data.lastn) {
                name = await db.get().collection(collection.name).find({ "ethni": { $in: data.eth }, 'gender': { $in: data.gender }, "name": { $regex: data.lastn + '$', $options: 'i' } }).toArray()
            }
            else if (!data.firstn && !data.lastn) {
                name = await db.get().collection(collection.name).find({ "ethni": { $in: data.eth }, 'gender': { $in: data.gender } }).toArray()
            }
            else {
                name = await db.get().collection(collection.name).find({ "ethni": { $in: data.eth }, 'gender': { $in: data.gender }, "name": { $regex: pattern, $options: 'i' } }).toArray()
            }
            resolve(name)
        })
    },
    // Get ethnic
    getethi: () => {
        return new promise(async (resolve, reject) => {
            let ethni = await db.get().collection(collection.ethni).find().toArray()
            resolve(ethni)
        })
    },

    // Name
    getName: (gender) => {
        return new promise(async (resolve, reject) => {
            let Name = await db.get().collection(collection.name).find({ 'gender': gender }).toArray()
            resolve(Name)
        })
    },
    // Name by alphabet
    getNameAlpha: (char) => {
        return new promise(async (resolve, reject) => {
            let Name = await db.get().collection(collection.name).find({ "name": { $regex: '^' + char, $options: 'i' } }).toArray()
            resolve(Name)
        })
    },
    // Name by ethnic
    getNameEth: (char) => {
        return new promise(async (resolve, reject) => {
            console.log(char);
            let Name = await db.get().collection(collection.name).find({ "ethni": char }).toArray()
            console.log(Name);
            resolve(Name)
        })
    },

    // Get single name
    getSingleName: (id) => {
        return new promise(async (resolve, reject) => {
            let Name = await db.get().collection(collection.name).findOne({ _id: ObjectID(id) })
            resolve(Name);
        })
    },
    getSingleNamev2: (id) => {
        return new promise(async (resolve, reject) => {
            let Name = await db.get().collection(collection.name).findOne({ _id: ObjectID(id) })
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
            let blog = await db.get().collection(collection.blog).findOne({ _id: ObjectID(id) })
            resolve(blog);
        })
    },

    // Set message
    setMessage: (data) => {
        return new promise(async (resolve, reject) => {
            db.get().collection(collection.message).insertOne(data).then(() => {
                resolve('Message sent successfully')
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
    // single Notice
    getSingleNotice: (id) => {
        return new promise(async (resolve, reject) => {
            let Notice = await db.get().collection(collection.notice).findOne({ _id: ObjectID(id) })
            resolve(Notice)
        })
    },

    // Meta
    getMeta: () => {
        return new promise(async (resolve, reject) => {
            let Meta = await db.get().collection(collection.Meta).find().toArray()
            resolve(Meta)
        })
    },
       // Meta Gp
       getMetaGp: () => {
        return new promise(async (resolve, reject) => {
            let Meta = await db.get().collection(collection.MetaGp).find().toArray()
            resolve(Meta)
        })
    },
       // Meta Ep
       getMetaEp: () => {
        return new promise(async (resolve, reject) => {
            let Meta = await db.get().collection(collection.MetaEp).find().toArray()
            resolve(Meta)
        })
    },
    // Ads
    getAds: () => {
        return new promise(async (resolve, reject) => {
            let Ads = await db.get().collection(collection.Ads).find().toArray()
            resolve(Ads)
        })
    },
      // About
      getAbout: () => {
        return new promise(async (resolve, reject) => {
            let About = await db.get().collection(collection.About).find().toArray()
            resolve(About)
        })
    },

    // like
    setLike: (body) => {
        return new promise(async (resolve, reject) => {
            try {
                //    let name= await db.get().collection(collection.name).findOne({_id:ObjectID(body.id)});
                //    var old_like= name.like
                db.get().collection(collection.name).updateOne({ "_id": ObjectID(body.id) }, {
                    $set: {
                        like: body.like
                    }
                }).then(() => {
                    resolve('Like updated Successfully')
                })

            } catch (error) {
                resolve(error)
            }
        })
    },
    getLike: (id) => {
        return new promise(async (resolve, reject) => {
            try {
                let name = await db.get().collection(collection.name).findOne({ _id: ObjectID(id) });
                resolve(name.like)


            } catch (error) {
                resolve(error)
            }
        })
    }
}