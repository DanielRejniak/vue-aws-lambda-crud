console.log('starting function')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

exports.handle = function(e, ctx, cb) {

  //Will need to take incoming parameters TODO
  let scanningParameters = {
    TableName: 'todo',
    Limit: 100
  };

  // Send the request to DB
  docClient.scan(scanningParameters, function(err,data) {
    if(err) {
      cb(err,null);
    } else {
      cb(null,data);
    }
  });
}