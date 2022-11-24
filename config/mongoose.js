const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo_list_db')

const db = mongoose.connection

db.on('error', console.log.bind(console,'Error connection to DB'));

db.once('open', function () {
    console.log('Connected to DB sucessfully');
})