const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const axios = require('axios');
const ProductService = require('./productService');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// ===============================================Product===========================================================
// https://d30vitmbo1.execute-api.us-east-1.amazonaws.com/stage1/createeditproduct
// let req = {"data":{"price":"10","prod_name":"KitKat","quantity_available":"1000","supplier_email":"sunil.kamble@forcepoint.com"}};
app.post('/api/createeditproduct', async (req, res) => {
  productService = new ProductService();
  let response = await productService.createeditproduct(req.body);
  console.log(response);
  res.send(response);
});
// https://78s2h5gkg3.execute-api.us-east-1.amazonaws.com/stage1/getalliproducts?email=sunil.kamble%40forcepoint.com&tab=market
// email=sunil.kamble%40forcepoint.com&tab=market
app.get('/api/getalliproducts', async (req, res) => {
  productService = new ProductService();
  let response = await productService.getalliproducts(req.query.email, req.query.tab);
  console.log(response);
  res.send(response);
});
// https://qk9eq9mpke.execute-api.us-east-1.amazonaws.com/stage1/deleteproduct?email=sunil.kamble%40forcepoint.com&item_id=114
// email=sunil.kamble%40forcepoint.com&item_id=114
app.delete('/api/deleteproduct', async (req, res) => {
  productService = new ProductService();
  let response = await productService.deleteproduct(req.query.email, req.query.item_id);
  console.log(response);
  res.send(response);
});

// listening from other microservices
app.post("/event-bus/event/listener", (req, resp) => {
  const { type } = req.body;
  console.log("ProductService: Received event ", type);
  resp.send({});
});

app.listen(4003, () => {
  console.log("product service listening at 4003");
});
