const { GoogleAuth } = require('google-auth-library');

async function main() {
  try {
    const auth = new GoogleAuth({
      keyFile: './firebase-key.json',
      scopes: [
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/firebase'
      ]
    });
    const client = await auth.getClient();
    const token = await client.getAccessToken();
    console.log("Token generated successfully!");
    
    // Now try to hit Firebase API
    const res = await client.request({
      url: 'https://firebase.googleapis.com/v1beta1/projects/homecaptn',
      method: 'GET'
    });
    console.log("Firebase API response:", res.status);
    console.log("KEY IS VALID AND HAS ACCESS!");
  } catch (e) {
    console.error("API Error:", e.message);
  }
}

main().catch(console.error);
