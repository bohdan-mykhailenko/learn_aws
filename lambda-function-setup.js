// Load the required Lambda client and commands.
const {
  CreateFunctionCommand,
} = require("@aws-sdk/client-lambda");
const {
  dynamoClient
} = require("./libs/dynamoClient.js");


// Set the parameters.
const params = {
  Code: {
    S3Bucket: "scheduled-events-with-lambda-and-dynamodb", // BUCKET_NAME
    S3Key: "mylambdafunction.zip ", // ZIP_FILE_NAME
  },
  FunctionName: "lambda-1",
  Handler: "index.handler",
  Role: "arn:aws:iam::021891616611:role/service-role/admin", // IAM_ROLE_ARN; e.g., arn:aws:iam::650138640062:role/v3-lambda-tutorial-lambda-role
  Runtime: "nodejs12.x",
  Description:
    "Scans a DynamoDB table of employee details and using Amazon Simple Notification Services (Amazon SNS) to " +
    "send employees an email the each anniversary of their start-date.",
};

const run = async () => {
  try {
    const data = await dynamoClient.send(new CreateFunctionCommand(params));
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
};
run();