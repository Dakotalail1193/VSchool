const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')
const { default: Issue } = require('../client/src/components/Issue.jsx')

commentRouter.get('/:issueId', async (req, res, next) => {
    try {
        const foundComments = await Comment.find({issueId: req.params.issueId})
        return res.status(200).send(foundComments)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

commentRouter.post('/:issueId', async (req, res, next) => {
    try {
        req.body.username = req.auth.username
        req.body.userId = req.auth._id
        req.body.issueId = req.params.issueId
        const newIssue = new Issue(req.body)
        const savedIssue = await newIssue.save()
        return res.status(201).send(savedIssue)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

commentRouter.put('/:issueId/:commentId', async (req, res, next)=> {
    try {
        const commentId = req.params.commentId
        const updatedId = await Comment.findByIdAndUpdate(
            commentId,
            req.body,
            {new: true}
        )
        return res.status(200).send(updatedId)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

commentRouter.delete('/:issueId/:commentId', async (req, res, next) => {
    try {
        const commentId = req.params.commentId
        const deletedComment = await Comment.findByIdAndDelete(commentId)
        return res.status(200).send(`Sucessfully deleted comment ${deletedComment}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = commentRouter