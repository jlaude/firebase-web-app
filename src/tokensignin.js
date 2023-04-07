import { OAuth2Client }  from "google-auth-library";

function tokenSignin(req,res) {

  const idToken = req.body.idtoken;
  // console.log(idToken);

  const client = new OAuth2Client("302884190983-t3b8rj7q5qqvvtecm564a8om3ak7j11m.apps.googleusercontent.com");
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: "302884190983-t3b8rj7q5qqvvtecm564a8om3ak7j11m.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend

    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];

    console.log("payload:", payload);
    res.end(payload.name);
  }
  verify().catch(console.error);

};

export  {tokenSignin};