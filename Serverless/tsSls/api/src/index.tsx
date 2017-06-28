import {Callback, Context} from 'aws-lambda'
import * as AWS from 'aws-sdk'

export function hello(event, context, callback) : void {
  const s3 = new AWS.S3();
  callback(null, {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({"message": "Hello AWS Lambda"})
  });
}
