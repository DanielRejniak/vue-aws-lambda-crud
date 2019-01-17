# Serverless TODO application

Application aims to demonstrate best practices when implementing serverless applications.

## Brief description

This is an attempt to construct a template that encapsulates a VUE application inside a doccker container that is secured by Auth0. The application communicates with lambda functions that reach out to DynamoDB table also hosted by AWS. Each API is secured with the access token provided by Auth0 authentication service making this implementation extremy secure and flexible due to the serverless backend.
