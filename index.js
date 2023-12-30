const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./router/router')
const port = 3000


mongoose.connect('mongodb://localhost/authsystem' , {
    useNewUrlParser : true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected 👍🏼")
}).catch((err) => {
    console.log(err)
})



app.use(cors());
app.use(express.urlencoded({extended : true}));



app.use(router)

app.listen(port, () => console.log(`✨ app listening on port ${port}!`))