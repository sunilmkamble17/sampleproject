const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const axios = require('axios');
const UserService = require("./userService")


const app = express();
app.use(cors());

app.use(bodyParser.json());

// app.use(cors({
//     origin: '*'
// }));
app.options( "*", cors() ); // include before other routes

app.use( ( req, res, next ) => {
    res.setHeader( "content-type", "application/json" );
    res.setHeader( "Access-Control-Allow-Origin", "*" );
    res.setHeader( "Access-Control-Allow-Methods", "OPTION,POST, PUT, DELETE, GET" );
    res.setHeader( "Access-Control-Allow-Headers", "Origin,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );

    res.setHeader( "Cache-Control", "no-cache" );
    next();
} );

// ===============================================User===========================================================
// https://esoug68jcf.execute-api.us-east-1.amazonaws.com/stage1/createuser
// let req = {"email":"rachna.jaju@forcepoint.com","fname":"rachna","lname":"jaju","pwd":"Admin@123"}
app.post('/api/register', async (req, res) => {
    userService = new UserService();
    let response = await userService.register(req.body);
    console.log(response);

    //emit event to event bus
    await axios.post("http://eventbus_svc:4001/event-bus/event", {
        type: "UserCreated",
        data: response
    }).catch(e => console.log(e));

    res.send(response);
});

// https://rbro9zlco6.execute-api.us-east-1.amazonaws.com/stage1/userlogin?email=rachna.jaju%40forcepoint.com&pwd=Admin%40123
// email=rachna.jaju%40forcepoint.com&pwd=Admin%40123
app.get('/api/userlogin', async (req, res) => {
    userService = new UserService();
    let response = await userService.login(req.query.email, req.query.pwd);
    console.log(response);
    res.send(response);
});

app.post("/event-bus/event/listener", (req, resp) => {
    const { type } = req.body;
    console.log("Received event ", type);
    resp.send({});
});

app.listen(4002, () => {
    console.log("user service listening at 4002");
});
