const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const note=require("./routes/api/note");

const app=express();

//apply body-parser middleware
app.use(bodyParser.json());

// DB launch
const db=require("./my-app/config/keys").mongoURI;

//connect to mongo
mongoose.connect("mongodb://localhost:27017/mymongo",{useNewUrlParser:true})
    .then(()=>console.log('MongoDB connected...'))
    .catch(err=>console.log(err));

app.use('/api/note',note);

const port=process.env.PORT||5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));



// app.get('/api/customers',(req,res)=>{
//     const customers=[
//         {id:"1", title:"first-Note", description:"heyyy there i am Sadaf"},
//         {id:"2", title:"second-Note", description:"heyyy there i am Kiran"},
//         {id:"3", title:"third-Note", description:"heyyy there i am Nimmi"}
//     ];
//     res.json(customers);
// });
//
// const port=5000;
//
// app.listen(port,()=>console.log(`Server started on port ${port}`));
