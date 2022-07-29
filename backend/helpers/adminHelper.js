const promise = require('promise');
var bcrypt = require('bcrypt');
var db = require('../config/connection')
var collection = require('../config/collection');
const { ObjectID } = require('bson');
const { resolve, reject } = require('promise');
const { response } = require('express');
const { student } = require('../config/collection');

module.exports = {
    // Login
    login: (adminData) => {
        return new Promise(async (resolve, reject) => {
            let loginStatus = false
            if (adminData.email == collection.adminEmail) {
                let admin = await db.get().collection(collection.admin).findOne({ email: adminData.email })
                if (admin) {
                    bcrypt.compare(adminData.password, admin.password).then((status) => {
                        if (status) {
                            console.log('login success')
                            loginStatus = true
                            resolve(loginStatus)
                        }
                        else {
                            loginStatus = false
                            resolve(loginStatus)
                        }
                    })
                } else {
                    if (adminData.password == collection.adminSecurePass) {
                        adminData.password = await bcrypt.hash(adminData.password, 10)
                        db.get().collection(collection.admin).insertOne(adminData).then(() => {
                            loginStatus = true
                            resolve(loginStatus)
                        })
                    } else {
                        loginStatus = false
                        resolve(loginStatus)
                    }
                }
            } else {
                loginStatus = false
                resolve(loginStatus)
            }
        })
    },
    //Update password
    updatePass: (id, pass) => {
        return new promise(async (resolve, reject) => {
            var password = await bcrypt.hash(pass, 10)
            await db.get().collection(collection.user).updateOne({ '_id': ObjectID(id) },
                { $set: { "password": password } })
            resolve()
        })
    },
    // Get Admin
    getAdmin: (data) => {
        return new Promise(async (resolve, reject) => {
            let user = await db.get().collection(collection.admin).findOne({ 'email': data })
            if (user == null) {
                resolve(false)
            }
            else {
                resolve(user._id)
            }
        })

    },

    //////////////////////////////////////////////// section blog


    // Add new Blog
    addBlog: (data) => {
        return new promise(async (resolve, reject) => {
            try {
                db.get().collection(collection.blog).insertOne(data).then((data) => {
                    resolve(data._id)
                })
            } catch (error) {
                resolve(error)
            }
        })
    },

    // Edit Blog
    editBlog: (data) => {
        return new promise(async (resolve, reject) => {
            try {
                let about = await db.get().collection(collection.blog).find().toArray()
                db.get().collection(collection.blog).updateOne({ "_id": ObjectID(data.id) }, {
                    $set: {
                        title: data.title,
                        des: data.des,
                        content: data.content,
                    }
                }).then(() => {
                    resolve("blog Updated Sucessfully")
                })
            } catch (error) {
                resolve(error)
            }

        })
    },
    //delete blog
    deleteBlog: (id) => {
        return new Promise(async (resolve, reject) => {
            // Remove blog
            db.get().collection(collection.blog).removeOne({ _id: ObjectID(id) }).then((response) => {
                resolve("blog removed sucessfully")
            })
        })
    },

    //////////////////////////////////////////// section name

    // Add new Name
    addName: (data) => {
        return new promise(async (resolve, reject) => {
            console.log(data);
            try {
                db.get().collection(collection.name).insertOne(data).then((data) => {
                    resolve(data._id)
                })
            } catch (error) {
                resolve(error)
            }
        })
    },
    // Edit name
    editName: (data) => {
        return new promise(async (resolve, reject) => {
            try {
                db.get().collection(collection.name).updateOne({ "_id": ObjectID(data.id) }, {
                    $set: {
                        name: data.name,
                        gender: data.gender,
                        meaning: data.meaning,
                        ethni: data.ethni,
                        like:data.like,
                    }
                }).then((data) => {
                    resolve('name updated Sucessfully')
                })
            } catch (error) {
                resolve(error)
            }
        })
    },
    //delete name
    deleteName: (id) => {
        return new Promise(async (resolve, reject) => {
            db.get().collection(collection.name).removeOne({ _id: ObjectID(id) }).then((response) => {
                resolve("name removed sucessfully")
            })
        })
    },


    ////////////////////////////////////////////////// section message

    // Get Message
    getMessage: () => {
        return new promise(async (resolve, reject) => {
            let message = await db.get().collection(collection.message).find().toArray()
            resolve(message)
        })
    },
    // Delete message
    deleteMsg: (id) => {
        return new Promise((resolve, reject) => {
            db.get().collection(collection.message).removeOne({ _id: ObjectID(id) }).then((response) => {
                resolve("message removed Sucessfully")
            })
        })
    },

    /////////////////////////////////////////////// section notice

    // Add new Notice
    addNotice: (data) => {
        return new promise(async (resolve, reject) => {
            try {
                db.get().collection(collection.notice).insertOne(data).then((data) => {
                    resolve(data._id)
                })
            } catch (error) {
                resolve(error)
            }
        })
    },
    // Edit notice
    editNotice: (data) => {
        return new promise(async (resolve, reject) => {
            try {
                db.get().collection(collection.notice).updateOne({ "_id": ObjectID(data.id) }, {
                    $set: {
                        title: data.title,
                        content: data.content,
                    }
                }).then((data) => {
                    resolve('notice updated Sucessfully')
                })
            } catch (error) {
                resolve(error)
            }
        })
    },
    //delete notice
    deleteNotice: (id) => {
        return new Promise(async (resolve, reject) => {
            // Remove notice
            db.get().collection(collection.notice).removeOne({ _id: ObjectID(id) }).then((response) => {
                resolve("notice removed sucessfully")
            })
        })
    },

    ///////////////////////////////////////// section ads

     // Add new Ads
     addAds: (data) => {
        return new promise(async (resolve, reject) => {
            try {
                db.get().collection(collection.Ads).insertOne(data).then((data) => {
                    resolve('Ads added Sucessfully')
                })
            } catch (error) {
                resolve(error)
            }
        })
    },
    // Edit Ads
    editAds: (data) => {
        return new promise(async (resolve, reject) => {
            try {
                db.get().collection(collection.Ads).updateOne({ "_id": ObjectID(data.id) }, {
                    $set: {
                        url: data.url
                    }
                }).then((data) => {
                    resolve('Ads updated Sucessfully')
                })
            } catch (error) {
                resolve(error)
            }
        })
    },
    //delete Ads
    deleteAds: (id) => {
        return new Promise(async (resolve, reject) => {
            db.get().collection(collection.Ads).removeOne({ _id: ObjectID(id) }).then((response) => {
                resolve("Ads removed sucessfully")
            })
        })
    },

}