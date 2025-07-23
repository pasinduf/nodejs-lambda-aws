const { handler } = require("../index");

async function testHandler() {
  const event = {
    httpMethod: "GET",
    path: "/test",
    queryStringParameters: { name: "John" },
    headers: { "Content-Type": "application/json" },
  };

  const context = {
    awsRequestId: "test-request-id",
    functionName: "test-function",
  };

  try {
    const result = await handler(event, context);
    console.log("Success:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

testHandler();
