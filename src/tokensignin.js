import { OAuth2Client }  from "google-auth-library";

import dotenv from "dotenv"
dotenv.config();

function tokenSignin(req,res) {

  const idToken = req.body.idtoken;
  // console.log(idToken);

  console.log("GOOGLEOAUTHCLIENTID: ",process.env.GOOGLEOAUTHCLIENTID );

  const client = new OAuth2Client(process.env.GOOGLEOAUTHCLIENTID);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: process.env.GOOGLEOAUTHCLIENTID,  // Specify the CLIENT_ID of the app that accesses the backend

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