const Task = require('../models/task.js')

module.exports = {
    index: (req, res) => {
        res.sendFile('index.html');
    },
    all: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.json(tasks);
        }
        catch (err) {
            res.json(err);
        }
    },
    one: (req, res) => {
        Task.findById(req.params)
            .then((data) => res.json(data))
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        console.log(req.body);
        const task = new Task(req.body);
        console.log(task);
        task.save()
            .then((data) => {
                console.log(data);
                res.redirect('/');
            })
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        Task.updateOne({ _id : req.params.id }, req.body)
            .then((data) => {
                console.log(data);
                res.redirect('/');
            })
            .catch(err => res.json(err));
    },
    delete: async (req, res) => {
        Task.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            }) ;
    },
}