const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];

//http://localhost:4005/event-bus/event
//other service will call
app.post("/event-bus/event", (req, resp) => {
  const event = req.body; // type,data

  events.push(event);
  //echoing the event to every service / broadcast
  console.log( `EventBus: event received-->${event}` );

  axios.post("http://product-srv:4003/event-bus/event/listener",event)
        .catch(e=>console.log(e.message));

  resp.send({});
});

app.get('/event-bus/event', (req, resp) => {
  resp.send(events);
});

app.listen(4001, () => {
  console.log("event bus started @4001");
});