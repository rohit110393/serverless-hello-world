"use strict";

module.exports.hello = async event => {
  let name = "World";
  if (event.queryStringParameters && queryStringParameters.name) {
    name = queryStringParameters.name;
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${name}`
      },
      null,
      2
    )
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
