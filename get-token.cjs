const { GoogleAuth } = require('google-auth-library');

async function main() {
  const auth = new GoogleAuth({
    keyFile: './firebase-key.json',
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/firebase'
    ]
  });
  const client = await auth.getClient();
  const token = await client.getAccessToken();
  console.log(token.token);
}

main().catch(console.error);
