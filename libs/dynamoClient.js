const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const REGION = "eu-north-1";

const dynamoClient = new DynamoDBClient({
  region: REGION, credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECTER_KEY
  }
});

module.exports = { dynamoClient };