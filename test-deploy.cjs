const client = require('firebase-tools');

client.deploy({
  project: 'homecaptn',
  only: 'hosting',
  cwd: process.cwd()
}).then(function() {
  console.log('Deployed successfully!');
}).catch(function(err) {
  console.log('Deploy Error:', err);
});
