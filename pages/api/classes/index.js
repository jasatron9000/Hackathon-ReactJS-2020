
import nextConnect from "next-connect"
import mongodb from "../../../middleware/database"

const handler = nextConnect();

handler.use(mongodb)


// Need to do enrollment into the class
// Need to implement middlewear to check that the student is in that class

handler.get(async (req, res) => {
    try {
        const allClasses = await req.db.collection('classes').find({}).toArray();
        res.json(allClasses)
    } catch (e) {
        console.log(e)
        res.json({status: "error", e})
    }
})


// User wont be able to access this, will require implementation of premission level
// handler.post(async (req, res) => {
//     try {
//         const data = req.body
//         await req.db.collection('classes').insertOne(data);
//         res.json({status: "success"})
//     } catch (e) {
//         console.log(e)
//         res.json({status: "error", e})
//     }
// })

export default handler;