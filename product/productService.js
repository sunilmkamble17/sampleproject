var AWS = require("aws-sdk");
const awsRegion = ("us-east-1");//"localhost"
const TABLE_NAME = "Product";
const CounterService = require('./counterService');
var CryptoJS=require("crypto-js");

const dConfig = {
    accessKeyId: "AKIAVKRIPRWEQ3LADHZY",
    secretAccessKey: "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",
    region: "us-east-1"
}
AWS.config.update(dConfig);
class ProductService {
    constructor() {
        this.docClient = new AWS.DynamoDB.DocumentClient({ region: awsRegion });
    }

    async createeditproduct(productRequest) {
        try {
            console.log("ProductService: createeditproduct Start");
            if (!productRequest.item_id) {
                let counterService = new CounterService();
                let counter = await counterService.getCounter();
                productRequest.item_id = counter;
            }
            var params = {
                TableName: TABLE_NAME,
                Item: productRequest
            };
            let response = await this.docClient.put(JSON.parse(JSON.stringify(params))).promise();

            console.log("ProductService: createeditproduct End");
            let resp = { Success: true, Message: "New Product has been Published!", Data: response.Item, "error": {} }
            return resp;
        } catch (error) {
            console.log(`ProductService: createeditproduct error occurred: ${error.stack}`);
            throw error;
        }
    }
    async getalliproducts(email, tab) {
        try {
            console.log("ProductService: getalliproducts Start");
            let params, message = "";
            if (tab == "published") {
                params = {
                    TableName: TABLE_NAME,
                    FilterExpression: "#email = :email",
                    ExpressionAttributeNames: {
                        "#email": "supplier_email",
                    },
                    ExpressionAttributeValues: {
                        ":email": email,
                    }
                };
                message = `List of Products Published by ${email}`;
            } else {
                params = {
                    TableName: TABLE_NAME,
                    FilterExpression: "#email <> :email",
                    ExpressionAttributeNames: {
                        "#email": "supplier_email",
                    },
                    ExpressionAttributeValues: {
                        ":email": email,
                    }
                };
                message = "List of Products available in the market.";
            }
            let response = await this.docClient.scan(JSON.parse(JSON.stringify(params))).promise();
            console.log("ProductService: getalliproducts End");
            let resp = { Success: true, Message: message, Data: response.Items, "error": {} };
            return resp;
        } catch (error) {
            console.log(`ProductService: getalliproducts error occurred: ${error.stack}`);
            throw error;
        }
    }

    async deleteproduct(email, item_id) {
        try {
            console.log("ProductService: deleteproduct Start");
            //to do validations
            var params = {
                TableName: TABLE_NAME,
                Key: { item_id: item_id }
            };
            let response = await this.docClient.delete(JSON.parse(JSON.stringify(params))).promise();
            console.log("ProductService: deleteproduct End");
            let resp = { "Success": true, "Message": "Product has been deleted!", "error": {} }
            return resp;
        } catch (error) {
            console.log(`ProductService: deleteproduct error occurred: ${error.stack}`);
            throw error;
        }
    }

    async updateproductquantity(req) {
        console.log("ProductService: updateproductquantity start", req);
        let product = await this.getproductbyid(req.item_id);
        product.quantity_available = product.quantity_available - +req.quantity;
        await this.createeditproduct(product);
        console.log("ProductService: product quantity updated");
    }

    async getproductbyid(item_id) {
        try {
			console.log("ProductService: getproductbyid Start");
			var params = {
				TableName: TABLE_NAME,
				Key: { item_id: item_id }
			};
            console.log("getproductbyid------>", item_id);
			let resp = await this.docClient.get(JSON.parse(JSON.stringify(params))).promise();
            console.log("ProductService: getproductbyid end");
            return resp.Item;
		} catch (error) {
			console.log(`ProductService: getproductbyid error occurred: ${error.stack}`);
			throw error;
		}
    }


}

module.exports = ProductService;