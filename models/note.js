const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const NoteSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type: String,
    },
    description:{
        type:String,
    }
});
module.exports=Note=mongoose.model('note',NoteSchema);