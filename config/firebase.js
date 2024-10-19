const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "ff-demo-yt",
    privateKey:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCoPPXrx36KKpei\n2Hf7e0EdaSn+JJyIZIke7IhvMiHeBfnmizyN6+j6GSiT+Y8Z4VsCyLxS7MrFX6RD\nMx5qk7MCNc0Slpky/FtQTR/E8dVCtnkQgl3QO513NsxglxnrQukUHo2mFD/Ft/PX\nHI2jkhiegjfnGJ+RojzUa2Ct1p0F14wthFTgpWw0XDBANKon+kRARTpZPD9n33TP\nwO33XQZEw34G3R2SbdKCG98r3T3OelS1ci+esX6JuaxgYMW2Jgz1WZ3Do7OadMfG\nlMNpfycheLoZCCkZn8K+1g+pSeWq6V5dilcAwRqs8SNeVWDVstPM00SLoYxZ/IVo\nRoTXLEERAgMBAAECggEABKGzAoP6PZsJFCxh9zwwMXtW8t52qcGczctkwSzv5kEj\nXV+5cc3MGvCM37AH6sY7v3KfzqeiuHbW2pvCa1w4Gig5hli7jH4KlIYfCQjAXocQ\nA66XHxe5ENJjI4idZ87uhEWIEEmv7MVQ8vvgAWARCfIbUGMq53NAOfff0EFfjszS\nIFC7DYtuaCHR5FL38eRJJiztmChmqtvm1ma/FfEFxu9TglniOCu/kR6CLAjA46uD\nn9jsle4n/ZEyiX+cPrt2jnZIp7wFFOj1YT41XP2USH8OkwNIMTjLgQKA7F4xOaCM\nYTHm7Vpwazz0AXy/F1mPRMUCR3ckalPOFc6JeyecgQKBgQDikek6GrqIG5Uboqi0\n+wNezsb5LB8uDLjmthqGJlW9RkFZ1K0pho1CrPJBJPe/ZxLMEPB1S5rdvWQ6VzRc\nJxXn3xNdezHnAtXVTnFEarHtpAw9MRHEKGBBSxjn12ansQJfExhLinSWiEy/L6vl\nCvEOtyeJj+Mr8b/HxkOdJvJ5sQKBgQC+F1oRZ6vUO12wveqzQN3rFr7PehaHwm9H\npUpkvUFbX+Y3HOJLp2z2AqBxJihedGaa7iOqhlinAm/kgtIjNIJt9OsJVaaSZJtS\nyDixcYaPtg8497t7ZT4gLj+hXU+YYkrihiztqj+jA5CrfTJAbxyhvlXYpDXcz6RL\nnFGKZ+K1YQKBgQCZkbbYuGc4fCGcAquBSCZnq5Y4LAzSRLNLRaFCzlcNHMKM5ded\nLuMuj1UAjNMUPAQEp3KkvmMw6v81gAgwchmp+Y0BrtALOePAWhPyALOrVKcrDshx\nAcEEYKd39YtSHGt0D9hG04jkw2vppqFHdRwhEknNNucO0SRhf2Qy78QocQKBgCl6\n9QeJROCqF7bCqp11ETgEnZyuuo3jat8KfaJf/gwPcDAkmGkD3u4MArDOL870vZMf\nVh8W8+91w67ssShHhBK0eDlwPEoDtDUrRdvKtx9TDh1TSdESda0WCoKO1xicklS+\nDL3MAdjzpTUWu8l9tZTB8P+2TZ6inOp28QAvzTPhAoGACgSQ7mJJHzuWhqvjpbW1\nUoE+lziMWFCW8CiiYmBNs91Uss9mj6SFf++nmZPdWcEEPNDxnIFLSb5VJv/b+gfM\noi52QN9hKKxfJCpIC+Km3O7myHyslhG4foYVej4MYPgqj7qghYXmqT+MJD8m1cMp\nIJtGg7iRAmhMvHOf/LOt/UI=\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-tv0uw@ff-demo-yt.iam.gserviceaccount.com",
  }),
});

const db = admin.firestore();

module.exports = { db };
