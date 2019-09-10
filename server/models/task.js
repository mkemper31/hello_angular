const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks', {useNewUrlParser: true});
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, default: '', },
    completed: { type: Boolean, default: false },
}, {timestamps: true });
module.exports = mongoose.model('Task', TaskSchema);