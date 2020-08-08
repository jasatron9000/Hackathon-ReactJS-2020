import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"
const { ObjectId } = require('mongodb')

const handler = nextConnect();

handler.use(mongodb)

handler.get(async (req, res) => {
    try {
        const allComments = await req.db.collection('comments').find({}).toArray();
        res.json(allComments)
    } catch (err) {
        res.json({status: "error", err})
    }
})

handler.post(async (req, res) => {
    try {
        // classID and userID provided by request
        const data = req.body
        req.body.date = new Date();
        const commentDatabase = await req.db.collection('comments').insertOne({
            "postID": data.postID,
            "userID": data.userID,
            "date": data.date,
            "body": data.body,
            "upVotes": [],
            "downVotes": []
        });
        const commentID = await commentDatabase.ops[0]._id
        await req.db.collection('posts').findOneAndUpdate({_id: ObjectId(data.postID)}, {$push: {"comments": commentID}})
        await req.db.collection('users').findOneAndUpdate({_id: data.userID}, {$push: {"comments": commentID}})
        res.json({status: "success"})
    } catch (err) {
        res.json({status: "error", err})
    }
})

export default handler;