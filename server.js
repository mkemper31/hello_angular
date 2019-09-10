const app = require('./server/config/mongoose.js')
app.listen(8000, () => console.log('listening on port 8000'));
require('./server/config/routes.js')(app);