const express=require('express')
const RecipeModel=require("../models/Recipe")

const router=express.Router()

router.post('/create-recipe', (req,res)=>{
    RecipeModel.create({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        imageurl: req.body.imageurl,
        userId: req.body.userId
    }).then(result=>{
        return res.json(result)
    }).catch(err=> console.log(err))
})

router.get('/recipes',(req,res)=>{
    RecipeModel.find()
    .then(recipes=>{
        return res.json(recipes)
    }).catch(err=>res.json(err))
})

router.get('/recipe-by-id/:id',(req,res)=>{
    const id=req.params.id;
    RecipeModel.findById({_id: id})
    .then(result=>{
        return res.json(result)
    }).catch(err=>res.json(err))
})

module.exports= router;
