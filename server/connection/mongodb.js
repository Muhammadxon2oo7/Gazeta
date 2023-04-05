const mongoose = require('mongoose')
const url = 'mongodb+srv://well_done:deWell_done07@online-shopping.viukj8y.mongodb.net/SOQQALI?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log('DB is good')
    }).catch((err) => {
        throw err;
    })