const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comment.js')


commentRouter.get('/', async (req, res, next) => {
    try {
        const foundComments = await Comment.find()
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
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        return res.status(201).send(savedComment)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

commentRouter.put('/:commentId', async (req, res, next)=> {
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

commentRouter.delete('/:commentId', async (req, res, next) => {
    try {
        // const commentId = req.params.commentId
        const deletedComment = await Comment.findByIdAndDelete(req.params.commentId)
        return res.status(200).send(`Sucessfully deleted comment ${deletedComment}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = commentRouter