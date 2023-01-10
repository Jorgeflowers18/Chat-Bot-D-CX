
// export class BotApi {

//   nombre: string;
  


//   constructor (nuevoNombre: string){
//     this.nombre = nuevoNombre;
//   }
//   hi(){
//     console.log('Comando reconocido.');
//   }
//   waitBot(num: number){
//     let response = 200
//     // this.viewContainer.remove();
//     return response
//   }
//   fmain() {
//     // [START dialogflow_cx_detect_intent_text]
//     /**
//      * TODO(developer): Uncomment these variables before running the sample.
//      * ID - Dialogflow - Chat UTPL
  
//       projects/test-bot-pt9k/locations/global/agents/154fda09-090e-4258-8bb4-dbe510d4098e
  
//       ID - Dialogflow - Test Bot
  
//       projects/test-bot-pt9k/locations/global/agents/b2d48bed-2f55-4182-880a-d754c361e874
//      */
//     const projectId = 'test-bot-pt9k';
//     const location = 'global';
//     const agentId = '154fda09-090e-4258-8bb4-dbe510d4098e';
//     const query = 'quiero saber de las carreras';
//     const languageCode = 'es';
    
//     // Imports the Google Cloud Some API library
//     const {SessionsClient} = require('@google-cloud/dialogflow-cx');
  
//     // service-399203813181@gcp-sa-dialogflow.iam.gserviceaccount.com
//     //key=AIzaSyAhZDofeFuaD-ZE-Jk6-FCrP6pbZ4LM9Ck
//     /**
//      * Example for regional endpoint:
//      *   const location = 'us-central1'
//      *   const client = new SessionsClient({apiEndpoint: 'us-central1-dialogflow.googleapis.com'})
//      */
//     const client = new SessionsClient();
  
//     async function detectIntentText() {
  
//       const sessionId = 1;//Math.random().toString(36).substring(7);
      
//       const sessionPath = client.projectLocationAgentSessionPath(
//         projectId,
//         location,
//         agentId,
//         sessionId
//       );
//       const request = {
//         session: sessionPath,
//         queryInput: {
//           text: {
//             text: query,
//           },
//           languageCode,
//         },
//       };
//       const [response] = await client.detectIntent(request);
//       for (const message of response.queryResult.responseMessages) {
//         if (message.text) {
//           console.log(`Agent Response: ${message.text.text}`);
//         }
//       }
//       if (response.queryResult.match.intent) {
//         console.log(
//           `Matched Intent: ${response.queryResult.match.intent.displayName}`
//         );
//       }
//       console.log(
//         `Current Page: ${response.queryResult.currentPage.displayName}`
//       );
//     }
  
//     // detectIntentText();
//     // [END dialogflow_cx_detect_intent_text]
//   }
//   // main(...process.argv.slice(2));
// }
