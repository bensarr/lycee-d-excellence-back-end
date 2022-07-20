const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const Files = require('edacy-files-walk');
const mongoose = require('mongoose');

const { DB_USERNAME, DB_PASS, NODE_ENV, PORT } = process.env;
const corsOptions = {
    origin: "http://localhost:4200"
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log('Connecting to DB...');
mongoose.connect(process.env.DB_URL)
.then((result) => {
    console.log('App is connected to Attlas db');
    initApp();
})
.catch((error) => {
    console.error('Error when connecting to DB \n'+error);
});

function initApp(){
    var routes = Files.walk(__dirname + '/api/modules');

    // IMPORT PUBLIC ROUTES
    for (var i = 0; i < routes.length; i++)
    if (routes[i].indexOf('routes') !== -1)
        require(routes[i])(app);

    app.listen(PORT, () => {
        console.log('Server Listening on port: '+PORT);
    });
}