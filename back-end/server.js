const express=require('express')
const hotelSchema =  require('./modules/hotels')
const app= express()
const mongoose=require('mongoose')
const routesUrl =require('./routes') 
const cors=require('cors')
mongoose.connect('mongodb+srv://user1:20588228aziz@cluster0.2x6lh.mongodb.net/?retryWrites=true&w=majority',()=>console.log('Database connected'))

/**body parser*/
app.use(express.json())
app.use(cors()) 
app.use('/app',routesUrl)
app.listen(4000,()=> console.log('server is running...'))

/*get all hotels */
app.get('/show-hotel',(req,res)=>{
	hotelSchema.find().then((result)=>{
		res.send(result);
	}).catch((err) =>{
		console.log(err);
	})
})

/*get single hotel */

app.get('/single-hotel',(req,res)=>{
    var name=req.body.name
    hotelSchema.find({"name":name}).then((result)=>{
		res.send(result);
	})
	.catch((err)=>{
		console.log(err);
	})
})