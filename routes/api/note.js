const express=require('express');
const router=express.Router();

//item model
const Note=require('../../models/note');

//route GET/api/notes
router.get('/',(req,res)=>{
   Note.find()
    .then(notes=>res.json(notes));
});

//route Post/api/notes
router.post('/',(req,res)=>{
   const newNote=new Note({
       id:req.body.id,
       title:req.body.title,
       description:req.body.description
   });
   newNote.save()
       .then(notes=>res.json(notes));

});

//route delete/api/notes
router.delete('/:id',(req,res)=>{
  Note.findById(req.params.id)
      .then(note=>note.remove().then(()=>res.json({success:true})))
      .catch(err=>res.status(404).json({success:false}));
})

module.exports=router;