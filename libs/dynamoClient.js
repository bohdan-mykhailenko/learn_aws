const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const REGION = "eu-north-1";

const dynamoClient = new DynamoDBClient({ region: REGION });

module.exports = { dynamoClient };