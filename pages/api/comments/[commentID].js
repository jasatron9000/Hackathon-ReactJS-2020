
import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"
const { ObjectId } = require('mongodb')

const handler = nextConnect();

handler.use(mongodb)

handler.get(async (req, res) => {
    try {
        const queryPost = await req.db.collection('comments').findOne({_id: ObjectId(req.query.commentID)});
        res.json(queryPost)
    } catch (e) {
        console.log(e)
        res.json({status: "error", e})
    }
})

handler.put(async (req, res) => {
    try {
    //    ability to edit the comment
    } catch (e) {
        console.log(e)
        res.json({status: "error", e})
    }
})

handler.delete(async (req, res) => {
    try {
        await req.db.collection('comments').findOneAndDelete({_id: ObjectId(req.query.commentID)});
        res.json({status: "sucess"})
    } catch (e) {
        console.log(e)
        res.json({status: "error", e})
    }
})

export default handler;