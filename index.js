const express= require("express")
const app= express()
const PORT=3001;
const cors=require("cors")

const connectDatabase=require("./config/connection")
connectDatabase();

const contact_schema=require("./models/contact")

app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000","https://www.webline.cloud/"]
}))

app.get("/", (req,res)=>{
    res.send("hello world")
})

app.post("/api/contact", async(req,res)=>{
    try {
        const {name,email,subject,message}=req.body;

    const save_contact= new contact_schema({
        name:name,
        email:email,
        subject:subject,
        message:message
    })
    await save_contact.save()
    res.status(201).json({data:"Thank You for contacting us!!"})
        
    } catch (error) {
        res.status(500).json({message:"something went wrong", error:error.message})
    }
    
})



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})