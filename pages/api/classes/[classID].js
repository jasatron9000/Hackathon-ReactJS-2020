import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"

const handler = nextConnect();

handler.use(mongodb)

handler.get(async (req, res) => {
    try {
        const classID = req.query.classID.toUpperCase()
        const allClasses = await req.db.collection('classes').find({_id: classID }).toArray();
        res.json(allClasses)
    } catch (e) {
        res.json({status: "error", e})
    }
})

handler.post(async (req, res) => {
    try {
        const classID = req.query.classID.toUpperCase()
        const userID = req.body.userID;
        await req.db.collection('classes').findOneAndUpdate({_id: classID }, {$push: {"users": userID}})
        await req.db.collection('users').findOneAndUpdate({_id: userID }, {$push: {"classes": classID}})
        res.json({status: "success"})
    } catch (e) {
        res.json({status: "error", e})
    }
})

export default handler;