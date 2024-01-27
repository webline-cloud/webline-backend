const mongoose= require("mongoose")

const connectDB= async()=>{
    try {
        await mongoose.connect("mongodb+srv://webline:neerajnavneet@cluster0.iwogcwg.mongodb.net/")
        console.log("Mongodb CONNECTED")
    } catch (error) {
        console.log("Mongodb CONNECTION FAILED")
        // console.log(error)
    }
}

module.exports=connectDB