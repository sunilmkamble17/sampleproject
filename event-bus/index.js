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
  // axios.post("http://user_svc:4002/event-bus/event/listener",event)
  //       .catch(e=>console.log(e.message));

  // axios.post("http://product_svc:4003/event-bus/event/listener",event)
  //       .catch(e=>console.log(e.message));

  // axios.post("http://order_svc:4004/event-bus/event/listener",event)
  //       .catch(e=>console.log(e.message));

  resp.send({});
});

app.get('/event-bus/event', (req, resp) => {
  resp.send(events);
});

app.listen(4001, () => {
  console.log("event bus started @4001");
});