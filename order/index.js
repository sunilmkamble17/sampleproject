const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const axios = require('axios');
const OrderService = require('./orderService');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// ===============================================Order===========================================================
// https://v2bbyu7y28.execute-api.us-east-1.amazonaws.com/stage1/orderitem/
// let req = {"data":{"email":"sunil.kamble@forcepoint.com","item_id":"113","order_status":"ordered","quantity":"2"}};
app.post('/api/orderitem', async (req, res) => {
  orderService = new OrderService();
  let request = { "supplier_email": req.body.email, "item_id": req.body.item_id, "order_status": req.body.order_status, "quantity": req.body.quantity };
  let response = await orderService.orderitem(request);
  console.log(response);
  res.send(response);
});
// https://950za1oi60.execute-api.us-east-1.amazonaws.com/stage1/getordereditems?email=sunil.kamble%40forcepoint.com
app.get('/api/getordereditems', async (req, res) => {
  orderService = new OrderService();
  let response = await orderService.getordereditems(req.query.email);
  console.log(response);
  res.send(response);
});

app.post("/event-bus/event/listener", (req, resp) => {
  const { type } = req.body;
  console.log("Received event ", type);
  resp.send({});
});

app.listen(4004, () => {
  console.log("comments service listening at 4004");
});
