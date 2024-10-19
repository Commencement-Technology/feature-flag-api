const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "feature-flags-yt",
    private_key_id: "46d807ccf58ba1d560d07ff2052f03f0e975c429",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCoC/bMljGq92Zx\nw43uynDs7nV54KOkdmGVLWPQKNaRoyKNzVDDO+OVZgKwiOk86468JEMOI64odHYA\nplrxiNUWHDdekaqvevHCJCOuGgCrBRgzF7P8fjTHEcc7e+cxpKKd5g4EnEeLJP6Z\nVJH/7gCDbETVGzBXB+XeoNNmiTNZcKNIOakhq5TBWQKLj/vcHszbDTQyhyPiOWRg\nATE9hgSNyIOXjp1BpWda4GSIdQxeLRHxxSdWx7nv4x2JoHDrr4ZBPLC+xKTb1ohL\nJ94CaOAI1T8qqyLQsSflL2hiNJ/AAqZt+ISoL+MJ68f8KcUssK5K6HFpKr3NlbkY\nF41B7CX3AgMBAAECggEABML6BkgHNkH2XCjfX7HKy1viZkawPFvCXhjAKEjP86Z8\ntynnLPEIfNY8I0Zt3XULQVeBsufd6nWKVnBgSVHIP+0iwII+JOTF7utZO3ivJilp\nyyDTz8a/thhR3eSf42830GORaB4JhO7SbAPScz8KMq8hsCwqDX1CzTEfbFtc4h7c\nMHbwWdFUXGA4q7uLk8cG68sCB7Ck/dic3tVYcVzTqBmGY/JoI6jesG3r/z0vPt6X\nAvuwPXL+4fCvdUWiFPuYz10DwtnTBkRUIXe7h1Nae8lHsiTMeyy6GNMJV5vTORi0\ngsbWEPfNulS00vEu1kr6RVuFSrtpDne4cCgNH6lnwQKBgQDP1bHAslSObfVGBW7f\neRgc3l5Vz9QKrEW2qbpVx5Kb136/2bAZYJ3qAYTyDKdWG5/FkwZYiv/44n9QXXpj\nY7g6cvOB8i91HZWRzToQaV0sBLxHAubPHRx+u2NaQeDqJq2tue/FUYkeo9s2ySvV\numW3kWM85AmjlQqdDP3EmUQHoQKBgQDO/b+gpSXsT7mdX+nJoNcrHjEq8AwypYhT\nxJWJEAmZ7+MhsedTe210n3ErdxdmBRcr5Q8lw8CKMbSrILGnKA/c+XWONu1ul+GC\n27C7qx8HibacbBNe3x1gkxnr2U7FDLpZsCBXsntiXS6ZPkuUQe4/DaRFcQsTEbLT\nRZ9UElHmlwKBgHp6Jyc0sEnDGOCrwPvm48PXc2ZEdGPZw7dybEGyu34lTyeGBJXf\n7w+A17TAqjg/TTdkfj/doh0sdPSKMd6yXFXtefzhGQB+b68dbxNO1D5liAKc/iGd\nuTYh/dmpqv6xznXrdhYlB5ZL35p4kOGB2AGGpyGyDNAeu8NzbXTXEVUhAoGBAKcl\n7WqSMe+D6cWVwDpbsaVV+ipMMe1sEoxigMZvtvEh7+4ztTOKxjaY0lBhGPn/Pljp\n3bOHQaHWxagy/IKZLUYqA63V2SGncCm1sh+57ZKuuFHUTEgeL6De6N21W5Bv2MO4\nIEXxEQW7bXe+AFY2b2dnYrHYuTKq5hcJb8H6ETz9AoGBAMedpc4qQ3JsvlKYfUhD\nDeztmSwjE44fsamDEF1a7UAVuC0Of+rMeoGWAkDz1IDF99j0zf6s5nW0x+Fl7RVO\n+nSxoZh1Ot6qdLcvoMen8DkjKtuo2wMmSIn7b8ep2lKLIxBJrlCeSONU6dStcDPn\nOcWS/XwPctsTH/cie9U3+qg+\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-qr1mf@feature-flags-yt.iam.gserviceaccount.com",
    client_id: "101688471791494448439",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qr1mf%40feature-flags-yt.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

const db = admin.firestore();

module.exports = { db };
