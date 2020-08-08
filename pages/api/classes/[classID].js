
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
        console.log(e)
        res.json({status: "error", e})
    }
})

export default handler;