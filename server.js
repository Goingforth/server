const express = require("express");
const app = express();

const morgan = require('morgan')
const mongoose = require('mongoose');
const methodOverride = require('method-override');

require('dotenv').config();

const postApiRoutes = require('./routes/api-post-routes');
const postRoutes = require("./routes/post-routes")
const contactRoutes = require("./routes/contact-routes")

const createPath = require("./helpers/create-path");

// const PORT = process.env.PORT || 3000;

// const db = "mongodb+srv://user:A1PgvPPMabhMaUG0@cluster0.zxtjwsh.mongodb.net/node-blog?retryWrites=true&w=majority";

mongoose
    .connect(process.env.MONGO_URL)
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));

app.set('view engine', 'ejs');

app.listen(process.env.PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('styles'));

app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    const title = 'Home';
    res.render(createPath('index'), { title });
});



app.use(contactRoutes);
app.use(postRoutes);
app.use(postApiRoutes);

app.use((req, res) => {
    const title = 'Error Page';
    res
        .status(404)
        .render(createPath('error'), { title });
});










