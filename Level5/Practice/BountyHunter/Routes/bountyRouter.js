const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

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

bountyRouter.get("/", (req,res) => {
    res.send(bounties)
})

bountyRouter.get("/:bountyId", (req, res) => {
  const bountyId= req.params.bountyId
  const selectedBounty = bounties.find(bounty => bounty._id === bountyId)
  res.send(selectedBounty)
})

bountyRouter.post("/", (req,res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
})

bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  bounties.splice(bountyIndex, 1)
  res.send("Succesfully completed bounty")
})

bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const updateObject = req.body
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
  res.send(updatedBounty)
})


module.exports = bountyRouter