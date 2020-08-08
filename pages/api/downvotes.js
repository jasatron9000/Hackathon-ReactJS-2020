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
            res.json({status: "You cannot downvote a comment more than once"})
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

handler.delete(async (req, res) => {
    try {
        const commentID = req.body.commentID
        const userID = req.body.userID
        const comment = await req.db.collection('comments').findOne({_id: ObjectId(commentID)});
        if (comment.upVotes.includes(userID) || comment.upVotes.includes(userID)){
            const pos = comment.downVotes.indexOf(userID)
            comment.downVotes.splice(pos)
            await req.db.collection('comments').findOneAndUpdate({_id: ObjectId(commentID)}, {$set: comment});
            res.json({status: "success"})
        } else {
            res.json({status: "error"})
        }
    } catch (err) {
        console.log(err)
        res.json({status: "error", err})
    }
})

export default handler;