console.log('starting function')

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

exports.handle = function(event, ctx, cb) {

  //Will need to take incoming parameters TODO
  var params = {
    Item: {
      date: Date.now(),
      message: event.body.message,
      status: false
    },
    TableName: 'todo'
  };

  // Send the request to DB
  docClient.put(params, function(err,data) {
    if(err) {
      cb(err,null);
    } else {
      cb(null,data);
    }
  });
}
