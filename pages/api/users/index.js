import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"

const handler = nextConnect();

handler.use(mongodb)

handler.post(async (req, res) => {
    try {
        const data = req.body;
        await req.db.collection('users').insertOne({
            _id: data.sub,
            nickname: data.nickname,
            name: data.name,
            picture: data.picture,
            updated_at: data.updated_at,
            classes: [],
            posts: [],
            comments: []
        })
        res.json({status: "success"})
    } catch (err) {
        res.json({status: "error", err})
    }
})

export default handler;