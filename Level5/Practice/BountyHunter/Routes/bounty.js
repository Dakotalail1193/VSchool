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

bountyRouter.post("/", (req,res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Succesfully added ${newBounty.firstName} ${newBounty.lastName} to the list`)
})