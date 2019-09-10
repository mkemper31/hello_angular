const tasks = require('../controllers/tasks.js');
module.exports = (app) => {
    // app.get('/', (req, res) => {
    //     tasks.index(req,res);
    // });
    app.get('/tasks', (req, res) => {
        tasks.all(req, res);
    });
    app.get('/tasks/:id', (req, res) => {
        console.log("getting by id");
        tasks.one(req, res);
    });
    app.post('/tasks/create', (req, res) => {
        tasks.create(req, res);
    });
    app.put('/tasks/:id', (req, res) => {
        tasks.update(req, res);
    });
    app.delete('/tasks/:id', (req, res) => {
        tasks.delete(req, res);
    });
}