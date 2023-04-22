
//Server Instantiate
const express = require('express');
const app = express(); // express ka single instance bana liya and uska name app rakh diya

//used to parse req.body in express --> PUT or POST
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
//specifically parse json Data & add data request.Body object
app.use(bodyParser.json());


// active server on port 3000
app.listen(3000, () => {
    console.log("Your server is created on Port No:3000")
});

//get Method using Routes

app.get("/", (req, res) => {
    res.send("Hii ,Aryan");
})


// post method using routes
app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("car Submitted Successfully.")

})


//connect mongoDb to express  server

// const data = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => { console.log("Successfully Connect") })
    .catch((error) => { console.log("error aa gya") })
