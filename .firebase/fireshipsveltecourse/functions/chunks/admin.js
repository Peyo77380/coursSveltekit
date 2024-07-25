import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FBASE_PROJECT_ID = "fireshipsveltecourse";
const FBASE_CLIENT_EMAIL = "firebase-adminsdk-t2ihc@fireshipsveltecourse.iam.gserviceaccount.com";
const FBASE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCevVHckWGaIzr5\nqOdfYeXUhvpTYKOwh6peIV93ziXTaKltk0PlXjkFpnULzPElS0SYTNqWsRixciWi\negX9kd7ZBrA6gKdFTCasxeO/3+j4+YKG/m5O5Rde4SR9+B0sEd9T/Q6Bo5z2Cdq0\nKooUSa3ZQlSNRI4Fwp+XZMOXhBDU30GdXPZSHxSUh81+AMAMYvH11RKDQW5Wq2zB\ny8L+DIZOTuqJfiW9RfSBpeA4PoEAofKkIt0deeiMdOiI9cnJ0+zaspft6iN9Xram\nBH4ZgYvA9fuw8dYNw56hHxOeyRTKnVr9EVl+MnnudaieHqZWG0RNoJVi0FtRNfd9\nnOLwYkYHAgMBAAECggEAAQy1MVY9d9ySPxWrAndzyF2RiOKL8KmIwUX/ztfC4r2D\nbf9pHTqCcl6WpF5zjcGixhGgQ3TTRWL9MU5+E4fPVoqC1vt8kJufiOdnQdVebvHZ\nxlbbxO2qSSGthAleu05mAbTuuPoFzwgX4olzWv5mMx/eCm/rMxVB19Z+Fj/eEvpD\nGr9b+YjfyUrLqB9zup6yOK42+n6jiB1GiD9GSCbZDG4DyuEGiML+W2haXM/LqMPC\n0Kty/XfjwJmTRgpFcKIdgssJFQD2IDNXglrPNCKy5fcIqiEKEt7wxlVqB1p5rRbe\noYtJoDU8qdiM4j76R7NI7pYJb7X+esd2rr076MD7kQKBgQDNJTdUcRkuK7hvHKa4\n1teEQWcFXaVylSmhI+6QzbBFwdve0QRNxvzl9/DX2XDIge4IK2FofYKjkcPqwD5c\n23XtLnUcdnahrqBJggJmGbjgNnqEOC0k1//ykvG2UXuUUs0IZpunIRPNMag3up+d\nI1iRpcFPvGEOcbCcLrnXftp3yQKBgQDGFyFZNfiBbuUeCZ1Ad/pWr8JP3SyPjXY5\nXBfRnH5uf0+2k9GEEDWhkc0lSfb33COs60Xp0HpRlQd0Fxo2gA6LqdUZT4h0OqSa\n6U09bBYbWupc5XdS/M0o2lLRpEu/NHWeIdGc+l+GHdYCkyrowjhwJt2OWzDhvDbT\n8WzTbzJXTwKBgQCrfHDEJcbm0aVbPJgh63Y9GG8GDUJAhnBGQ8MpSMgRh/xERnVS\njwTZOGocBahB9FsGeTz0G/cYxMEBe7Kl7M6ndi5vnJeOkGttB0D6GIZy5xeDb3JN\nWkKahDuKLJMhahX678st6nijDt+PtnG26dUf62+tN8vqRx9bb7PqcCAwAQKBgCzo\nzYy2KbLee19F+rrE+KJyknEcyZ96CNWURWomOpu+jUntVVDFhAMvVP0hObaT2Bq5\n9E3AEBsy2E+/dRfqDGIpjMCCQYNoUC02u2YzfQeSoxOQim7sFW8voBsbTnj44bmK\nHUWjlciINx66Ur4WWklC5nQBxKFI1H1UfMGqshUNAoGBAMCyQe0BpwFR8XLZvtyc\n7ccFc9OcGfdF4jqLfQ3eAugtjgGNXGcYaRGiQu+bly4Yi63k0NxX0JMVJH+ug+6q\nbUddkyJzSxXTxskrMnlezlrm55oADxtSN8YjiPVWCxStFKl92dsmU5uWoo5R8jKq\nJhOYi37bVW4CxHvjZoDRldot\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FBASE_PROJECT_ID,
      clientEmail: FBASE_CLIENT_EMAIL,
      privateKey: FBASE_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error : ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
