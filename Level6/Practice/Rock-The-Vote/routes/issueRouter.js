const express = require('express')
const Issue = require('../models/issue')
const issuesRouter = express.Router()

issuesRouter.post('/', async (req, res, next) => {
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        const newIssue = new Issue(req.body)
        const savedIssue = await newIssue.save()
        return res.status(201).send(savedIssue)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

issuesRouter.get('/user', async (req, res, next ) => {
    try {
        const foundIssues = await Issue.find({userId: req.auth._id})
        return res.status(200).send(foundIssues)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

issuesRouter.get('/', async (req, res, next ) => {
    try {
        const foundIssues = await Issue.find()
        return res.status(200).send(foundIssues)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})
issuesRouter.delete('/:issueId', async(req, res, next)=> {
    try {
        const issueId = req.params.issueId
        const deletedIssue = await Issue.findByIdAndDelete(issueId)
        return res.status(200).send(`Succesfully deleted issue titled ${deletedIssue.title}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

issuesRouter.put('/:issueId', async(req, res, next) => {
    try {
       const issueId = req.params.issueId 
       const updatedId = await Issue.findByIdAndUpdate(
        issueId,
        req.body,
        {new:true}
       )
       return res.status(200).send(updatedId)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

issuesRouter.put('/upvotes/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: {upvotes: req.auth._id},
                $pull: {downvotes: req.auth._id}
            },
            {new: true}
        )
        return res.status(201).send(updatedIssue)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

issuesRouter.put('/downvotes/:issueId', async (req, res, next) => {
    try {
        const updatedIssue = await Issue.findByIdAndUpdate(
            req.params.issueId,
            {
                $addToSet: {downvotes: req.auth._id},
                $pull: {upvotes: req.auth._id}
            },
            {new: true}
        )
        return res.status(201).send(updatedIssue)

    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = issuesRouter