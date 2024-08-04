const {
  BatchWriteItemCommand
} = require("@aws-sdk/client-dynamodb");
const { dynamoClient } = require("./libs/dynamoClient.js");

// Set the parameters.
const params = {
  RequestItems: {
    Employee: [
      {
        PutRequest: {
          Item: {
            id: { S: "1" },
            firstName: { S: "Bob" },
            phone: { N: "155555555555657" },
            startDate: { S: "2020-6-17" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "2" },
            firstName: { S: "Xing" },
            phone: { N: "155555555555653" },
            startDate: { S: "2019-12-17" },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: { N: "55" },
            firstName: { S: "Harriette" },
            phone: { N: "155555555555652" },
            startDate: { S: "2019-12-19" },
          },
        },
      },
    ],
  },
};

const run = async () => {
  try {
    const data = await dynamoClient.send(new BatchWriteItemCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();