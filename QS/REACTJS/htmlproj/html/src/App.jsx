
// import HT from "./html/html"
// // import Nav from "./css/navbar/nav"
// import Js from "../src/js/js"
// import T from "./toggle/t"
// // import "./index.css"
// import Fchild from "./props/fchild"
// import Hok from "../src/hooks/hooks"
 import Ucb from "./hooks/usecallback/ucb"
 import Memo from "./hooks/usememo/Umo"
 import Mod from "./model/model"
 import Mt from "./model/task/mt"
import Pix from "./pixabaysearch/Pix"
 import Sc from "./search/Search"
 import Pixa from "./temp/app"
//  import CRUD from "./CRUD/crud"
 import Log from "./login/log"
// const age=22;
// function cli1(){
//   //  document.body.style.backgroundColor="red"

// }
// function cl2(){
//   document.body.style.backgroundColor="green"
 //}


 function App(){
   return(
     <div>
      {/* <Nav/> */}
      {/* <Js/> */}
      {/* <Fchild name="nikhil" age={age} cli1={cli1} cl2={cl2}/>
       */}
 {/* <Hok/> */}
    
     {/* <Memo/> */}
{/* <Mod/> */}
{/* <Mt/> */}
  {/* <Sc/>   */}
{/* <Pix/> */}
 {/* <Pixa/>   */}
 {/* <CRUD/> */}
 <Log/>
     </div>
   )
 }
 export default App


// import * as React from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//   url = window.location.href
// ) {
//   let urlStr = url.split('?')[1];
//   return new URLSearchParams(urlStr);
// }

// export default function App() {
//       const roomID = getUrlParams().get('roomID') || randomID(5);
//       let myMeeting = async (element) => {
//      // generate Kit Token
//       const appID = 469797623;
//       const serverSecret = "a11a0b631fdc1653f090e1df157a763c";
//       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


//      // Create instance object from Kit Token.
//       const zp = ZegoUIKitPrebuilt.create(kitToken);
//       // start the call
//       zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: 'Personal link',
//             url:
//              window.location.protocol + '//' + 
//              window.location.host + window.location.pathname +
//               '?roomID=' +
//               roomID,
//           },
//         ],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//         },
//       });


//   };

//   return (
//     <div
//       className="myCallContainer"
//       ref={myMeeting}
//       style={{ width: '100vw', height: '100vh' }}
//     ></div>
//   );
// }