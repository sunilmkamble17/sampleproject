var AWS = require( "aws-sdk" );
const awsRegion = ( "us-east-1" );//"localhost"
const TABLE_NAME = "Order";
var CryptoJS=require("crypto-js");
const axios = require('axios');

const dConfig = {
    accessKeyId: "dummy",
    secretAccessKey: "dummy",
    region: "us-east-1"
}
AWS.config.update(dConfig);
class OrderService {
	constructor( ) {
		this.docClient = new AWS.DynamoDB.DocumentClient( { region: awsRegion } );
	}

	async orderitem( orderRequest ) {
		try {
			console.log( "OrderService: orderitem Start" );
			var params = {
				TableName: TABLE_NAME,
				Item: orderRequest
			};
			let response = await this.docClient.put(  JSON.parse( JSON.stringify( params ) )  ).promise();
			console.log('order created response--------->', response);
			let resp = {"Success": true, Message: "Product has been Ordered!", Data: orderRequest, "error": {}};
			console.log( "OrderService: orderitem End" );
			//raise event to product microservice to reduce quantity
			
			console.log( "OrderService: event-->order created..." );
			await axios.post("http://event-bus-srv:4001/event-bus/event",{
              type:"orderCreated",
              data:{resp}
          	}).catch(e=>console.log(e.message));

			return resp;
		} catch ( error ) {
			console.log( `OrderService: error occured while adding order item - ${error}` );
			throw error;
		}
	}

	async getordereditems( email ) {
		try {
			console.log( "OrderService: getordereditems Start", email );
			let params = {
				TableName: TABLE_NAME,
				FilterExpression: "#key = :value",
				ExpressionAttributeNames: {
					"#key": "supplier_email",
				},
				ExpressionAttributeValues: {
					":value": email,
				}
			};
			console.log("params------->", params);
			let response = await this.docClient.scan(  JSON.parse( JSON.stringify( params ) )  ).promise();
			console.log(response);
			let resp = {Success: true, Message: "List of Ordered Items!", Data: response.Items, "error": {}};				
			console.log( "OrderService: getordereditems End" );
			return resp;
		} catch ( error ) {
			console.log( `OrderService: getordereditems error occurred: ${error.stack}` );
			throw error;
		}
	}
}

module.exports = OrderService;