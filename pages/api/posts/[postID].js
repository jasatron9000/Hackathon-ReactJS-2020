import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"
const { ObjectId } = require('mongodb')

const handler = nextConnect();

handler.use(mongodb)

handler.get(async (req, res) => {
    try {
        const queryPost = await req.db.collection('posts').findOne({_id: ObjectId(req.query.postID)});
        console.log(queryPost)
        res.json(queryPost)
    } catch (err) {
        res.json({status: "error", err})
    }
})

handler.put(async (req, res) => {
    try {
        const data = req.body
        await req.db.collection('posts').update({_id: ObjectId(req.query.postID)}, {$set: data })
        res.json({status: "sucess"})
    } catch (err) {
        res.json({status: "error", err})
    }
})

handler.delete(async (req, res) => {
    try {
        const data = await req.db.collection('posts').findOne({_id: ObjectId(req.query.postID)});
        await req.db.collection('posts').findOneAndDelete({_id: ObjectId(req.query.postID)});
        await req.db.collection('class').findOneAndUpdate({_id: data.classID}, {$pull: {"posts": ObjectId(req.query.postID)}})
        await req.db.collection('users').findOneAndUpdate({_id: data.userID}, {$pull: {"posts": ObjectId(req.query.postID)}})
        res.json({status: "sucess"})
    } catch (err) {
        res.json({status: "error", err})
    }
})

export default handler;