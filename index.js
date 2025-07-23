exports.handler = async (event, context) => {

  try{
     const response = {
       statusCode: 200,
       headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*",
       },
       body: JSON.stringify({
         message: "Hello from nodejs Lambda!!",
         timestamp: new Date().toISOString(),
         event: event,
       }),
     };
     return response;
  }catch(error){
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: "Internal server error",
        error: error.message,
      }),
    };
  }
};
