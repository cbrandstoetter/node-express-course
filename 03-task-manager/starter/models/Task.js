const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxlength: [20, 'enter less than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false,
    } 
})

module.exports = mongoose.model('Task', TaskSchema)
