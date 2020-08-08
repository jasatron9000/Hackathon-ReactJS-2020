
import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"

const handler = nextConnect();

handler.use(mongodb)

handler.get(async (req, res) => {
    try {
        const userInfo = await req.db.collection('users').findOne({_id: req.query.userID});
        res.json(userInfo)
    } catch (err) {
        res.json({status: "error", err})
    }
})

handler.put(async (req, res) => {
    try {
        const data = req.body
        await req.db.collection('users').update({_id: req.query.userID}, {$set: data })
        res.json({status: "sucess"})
    } catch (err) {
        res.json({status: "error", err})
    }
})

export default handler;