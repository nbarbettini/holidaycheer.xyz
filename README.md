# Cheer as a service

A little API to spread holiday cheer, powered by AWS Lambda and API Gateway: [holidaycheer.xyz](https://www.holidaycheer.xyz)

```
GET https://api.holidaycheer.xyz

200 OK
{
  "holidaySeason": true,
  "greeting": "Merry Christmas!"
}
```

Or, for a more personalized greeting:

```
POST https://api.holidaycheer.xyz/cheer
Content-Type: application/json
{
  "name": "Nate"
}

200 OK
{
  "holidaySeason": true,
  "greeting": "Happy holidays, Nate!"
}
```

## Build it yourself

Follow my [tutorial](https://developer.okta.com/blog/2017/12/21/spread-serverless-holiday-cheer) to learn how to build your own cheerful API!
