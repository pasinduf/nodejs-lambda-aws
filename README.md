#generate zipped file using bestzip
 -- install bestzip library
 -- update package json with 'build' command
 -- run 'npm run build'

#deploy lambda function in aws using zipped file:
aws lambda create-function 
  --function-name {functionName}
  --runtime nodejs18.x 
  --role arn:aws:iam::{accountId}:role/{roleName}
  --handler index.handler 
  --zip-file fileb://{zippedFileName}.zip 
  --description "{description}"

#update lambda function using zipped file:
  aws lambda update-function-code
  --function-name {name}
  --zip-file fileb://{zippedFileName}.zip 

  or
  run 'npm run deploy'