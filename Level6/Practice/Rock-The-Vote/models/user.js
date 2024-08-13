const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrpyt = require('bcrypt')

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    memberSince:{
        type: Date,
        default: Date.now
    }


})

userSchema.pre('save', async function(next){
    const user = this
    if (user.isModified('password')){
        try {
            const hash = await bcrpyt.hash(user.password, 10)
            user.password = hash
        } catch (error) {
            return next(error)
        }
    }
})

userSchema.methods.checkPassword = async function(passwordAttempt){
    try {
        return bcrpyt.compare(passwordAttempt, this.password)
    } catch (error) {
        throw(error)
    }
}

userSchema.methods.withoutPassword = function (){
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)