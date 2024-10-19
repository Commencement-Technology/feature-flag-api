const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "ff-demo-yt",
    private_key_id: "6cdbafbf79e6b3c6776bf5124ea343b8a7fbca43",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCrdazZXoRJzyG+\n52jTuGsoiL7Rg/RKRmonD7cOsTnk78MhuxYWLk1xAw4kUSLq9cmUMBp9fNzjgm9Q\ncIxqglJAx37VrAUk7nh//fxl8MGivMubS0zNiO7rHKxPl8GQYp9YPUnXwStsh/zv\n3o/1NHf9kpvNTza66i104p2j29RdZ2KbTx/l6wA07tqVYshFxP7Huft9JUFkvqZn\n3J5czirAMpIG8IjG3C4GmyJqEz/RvKfTsdU/T2vD9OXgRf6abvTK3P3vwTwsvAzC\nc3Uv2H+gm2KbDCHCYIDQl9vCyBvGTWLlQERKW3mLtbUrxaIBfhZT1jFqK5cOMY+C\nQM0/gV1dAgMBAAECggEAAKKVMxHrTgWvI5CiXgRlGzeUc1y4gyzrGD1x6WNFKmCr\n+ZxCiu79ePFwtDg7t6CU8FBUTMoxXENfq63bC0rzyIskoGB8fWRHvHuhm3QOl454\n95iKDonXDrZiugG/JQyEeBR0CVFNGqAPUwkhQeCBoEYSfypvsrYK2I+9Uz3NddIa\naBTG16BQyaNZ0+zVliqknLpwbtzFWXHZqTgbGHhtpNNphw5gNHkkIpdLa8GudPBJ\nd1YoKjnlbHn0p2K9AwVL4mH/1VEEVYBcKJvxkOtDrhBltZiFpGMJLKy2vxNYe0bZ\nBjYTg69vdLItxFXA7+qtWLevILHQ134FBFYwUVad8QKBgQDiuZbbpEuh95yJ/xrc\nBZvT9kcnWGD3JMVudQhmMgR5nGTnjKE1uwP08HSmMngWuzHRICwtlJBpJt0MnYxa\nLvaAsOh+H1x8Y4K0O257S/Mk+Y1UY6pZaAK8KC4Tn8nHbZp/8bzI0C4qt/dpXuDJ\nzHry+TAPrRA1XT/CuoyYKsc6rQKBgQDBmUmdvA0itFfjJYiA8iSnqId8jxCGIjwS\ns4lGllSDQtq9Ot+G4UvZZuZoIEwa/PmrmMOcMJ0bAODffeVAfRLJVWXnF//guO/i\nLtqbpmGwyDFb/8W3k2PEb5Vd2Ixf0V1pWSzEwjSKiUDW/aWL1XOzam906j/9cdDV\nocki3GAzcQKBgCDJH6SRZJJ+YPefmT253efP1Eg/Qn5apeYsLFPC5dzEHd9R+bnw\nWkkgQG4MHEuFNFX+ZgUNV7is8wgw/CvKYMEJVAVw+YnPRgZUFczklbuCDsrmQqr9\nHHAjC06xK5eYJOBdj6QmXpa01aU6IB1uYVUjbazGpPJikqbRHSWgAgFdAoGAWCnL\naYaa4MQKBgowqLAc2zEXSjUIjF0IyGd0S23oXMJURLqL0qvE0+NVZ/PVVLEBrhBq\nfDVzRjnXLk/x17VdmcxHFL9MKnVt4K3/pcRWVqBEQiYvTxNS6sD533vfKT9576DJ\nj2z1amVo3r8x5YU2JG2DBlYq/+sV9EOyCisbsDECgYBeSdkaUDTjaMVP7dXOrg/P\njk7M6VPtZlrxOo/suJpol1+0gpEQttQxVlU2kn5//NR5NElsu8Vqp4A5CTMMQPza\n1/b9ky4m/PJ9zU8g0TTerWYTMrQTR1Mw45wXOjVbqTKrkS+Ngm+ykqbqkRqkTCIk\nX84h+Jy6b9x3lpqrFnPDzQ==\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-tv0uw@ff-demo-yt.iam.gserviceaccount.com",
    client_id: "111219473318222204910",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tv0uw%40ff-demo-yt.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

const db = admin.firestore();

module.exports = { db };
