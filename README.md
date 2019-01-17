# vue-aws-lambda-crud

This is an attempt to construct a tempalte that encapsulates a VUE application inside a doccker container that is secured by Auth0. The application accesses the standard CRUD API'd (Create, Read, Update and Delete) through use of serverless API's provided by AWS Lambda. The lambda function reaches out to DynamoDB table also hosted by AWS. Each API is secured with the access token provided by Auth0 authentication service makig this implementation extremy secure and flexible due to the serverless backend.
