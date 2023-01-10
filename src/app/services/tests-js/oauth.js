// var GoogleAuth; // Google Auth object.
// function initClient() {
//   gapi.client.init({
//       'apiKey': 'AIzaSyB_UOny8GsPo0ZRpSmeiq0F82oaOLybiZo',
//       'clientId': '399203813181-9akuvjs6r5d2cjlc9kkuvh1sptecomm8.apps.googleusercontent.com',
//       'scope': 'https://www.googleapis.com/auth/dialogflow',
//       // https://www.googleapis.com/discovery/v1/apis/name/version/rest => https://www.googleapis.com/discovery/v1/dialogflow/v3/rest
//       'discoveryDocs': ['https://www.googleapis.com/discovery/v1/dialogflow/v3/rest']
//   }).then(function () {
//       GoogleAuth = gapi.auth2.getAuthInstance();

//       // Listen for sign-in state changes.
//       GoogleAuth.isSignedIn.listen(updateSigninStatus);
//   });
// }