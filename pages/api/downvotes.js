import nextConnect from "next-connect"
import mongodb from "../../middleware/database"
const { ObjectId } = require('mongodb')

const handler = nextConnect();

handler.use(mongodb)

handler.post(async (req, res) => {
    try {
        const commentID = req.body.commentID
        const userID = req.body.userID
        const comment = await req.db.collection('comments').findOne({_id: ObjectId(commentID)});
        if (comment.upVotes.includes(userID) || comment.upVotes.includes(userID)){
            res.json({status: "you have already posted a comment before"})
        } else {
            comment.downVotes.push(userID);
            await req.db.collection('comments').findOneAndUpdate({_id: ObjectId(commentID)}, {$set: comment});
            res.json({status: "success"})
        }
    } catch (err) {
        console.log(err)
        res.json({status: "error", err})
    }
})

export default handler;