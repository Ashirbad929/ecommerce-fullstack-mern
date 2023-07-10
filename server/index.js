const mongoose = require('mongoose');
const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan');
const bodyParser = require('body-parser');
const cors=require('cors')
const {readdirSync}=require('fs')
// import routes


dotenv.config()
// db connection setup
const app=express();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json({limit:"4mb"}))
app.use(cors())
// routes middleware
// mapping over routtes dir to require all routes to avoid multiple imports
readdirSync('./routes').map((r)=>app.use("/api",require('./routes/'+r)))



// port
const port=process.env.PORT || 8000;
app.listen(port,()=>console.log(`server running on port=>${port} `))


