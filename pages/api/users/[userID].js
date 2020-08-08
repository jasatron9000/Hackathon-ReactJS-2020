
import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"

const handler = nextConnect();

handler.use(mongodb)

handler.get(async (req, res) => {
    try {
        const userInfo = await req.db.collection('users').findOne({_id: req.query.userID});
        res.json(userInfo)
    } catch (e) {
        console.log(e)
        res.json({status: "error", e})
    }
})

handler.put(async (req, res) => {
    try {
        const data = req.body
        await req.db.collection('users').update({_id: req.query.userID}, {$set: data })
        res.json({status: "sucess"})
    } catch (e) {
        console.log(e)
        res.json({status: "error", e})
    }
})

export default handler;