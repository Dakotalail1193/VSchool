const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const Bounty = require ('../model/bounty')

const bounties = [
    { firstName:"Gluk",
      lastName:"Pitto",
      living: true,
      bountyAmount: 1000,
      type:"Sith",
      _id:uuidv4()         
    },
    { firstName:"Lad",
        lastName:"Agows",
        living: true,
        bountyAmount: 2500,
        type:"Jedi",
        _id:uuidv4()            
      },
      { firstName:"Rysi",
        lastName:"Celwik",
        living: true,
        bountyAmount: 4800,
        type:"Jedi",
        _id:uuidv4()            
      },
      { firstName:"Darro",
        lastName:"Tanau",
        living: true,
        bountyAmount: 2000,
        type:"Sith",
        _id:uuidv4()            
      }
]

bountyRouter.get("/", async (req, res, next ) => {
    try {
      const foundBounty = await Bounty.find()
      return res.status(200).send(foundBounty)
    } catch (err) {
      res.status(500)
      return next(err)
    }
})

bountyRouter.get("/:bountyId", async(req, res, next) => {
  try {
    const bountyId = req.params.bountyId
    const foundBounty = await Bounty.findById(bountyId)
    return res.status(200).send(foundBounty)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

bountyRouter.post("/", async(req,res, next)=>{
    try {
      const newBounty = new Bounty(req.body)
      const savedBounty = await newBounty.save()
      return res.status(200).send(savedBounty)
    } catch (err) {
      res.status(500)
      return next(err)
    }
})

bountyRouter.delete("/:bountyId", async(req, res) => {
  try {
    const bountyId = req.params.bountyId
    const deletedBounty = await Bounty.findByIdAndDelete(bountyId)
    return  res.status(200).send(`Succesfully completed bounty for ${deletedBounty.firstName}` )
  }catch(err){
    res.status(500)
    return next(err)
  }
})

bountyRouter.put("/:bountyId", async(req, res, next) => {
 try {
  const bountyId = req.params.bountyId
  const updatedBounty = await Bounty.findByIdAndUpdate(
    bountyId,
    req.body,
    {new:true}
  )
  return res.status(200).send(updatedBounty)
 } catch (err) {
  res.status(500)
  return next(err)
 } 
  
})


module.exports = bountyRouter