const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const REGION = "eu-north-1";

const dynamoClient = new DynamoDBClient({
  region: REGION, credentials: {
    accessKeyId: 'AKIAQKGGXR5RUUX344IS',
    secretAccessKey: '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'
  }
});

module.exports = { dynamoClient };