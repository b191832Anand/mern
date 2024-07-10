const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const authrouter=require('./routes/auth.router')
const app=express()
app.use(cors());
app.use(express.json())
mongoose.connect('mongodb+srv://anand:1925112816@cluster0.qm0ie67.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB connected")).catch(err => console.error("DB connection error:",err));
app.get('/',()=>console.log("jai shree ram"))
app.use('/api',authrouter)
app.listen(1010,()=>console.log("server connected"))
