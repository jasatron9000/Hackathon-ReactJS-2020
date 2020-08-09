import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"
const cloudinary = require('cloudinary');

const handler = nextConnect();

handler.use(mongodb)

handler.get(async (req, res) => {
    try {
        const allPosts = await req.db.collection('posts').find({}).toArray();
        res.json(allPosts)
    } catch (err) {
        res.json({status: "error", err})
    }
})

handler.post(async (req, res) => {
    try {
        // classID and userID provided by request
        const data = req.body
        req.body.date = new Date();
        const imageupload = await cloudinary.v2.uploader.upload(req.body.file , (err, result) => { err ? console.log(err) : result});   
        const postDatabase = await req.db.collection('posts').insertOne({
             "classID": data.classID,
             "title": data.title,
             "image": imageupload.url,
             "date": data.date,
             "body": data.body,
             "userID": data.userID,
             "comments": []
        });
        const postID = await postDatabase.ops[0]._id
        await req.db.collection('classes').findOneAndUpdate({_id: data.classID}, {$push: {"posts": postID}})
        await req.db.collection('users').findOneAndUpdate({_id: data.userID}, {$push: {"posts": postID}})
        res.json({status: "success"})
    } catch (err) {
        console.log(err)
        res.json({status: "error", err})
    }
})

export default handler;