console.log("in main.js", chrome.runtime);
document.getElementById("foo").innerHTML="Main.js";

// chrome.tabs.getCurrent(function (tab) {
//   if(tab && tab.id){
//     try{
//       chrome.tabs.update(tab.id, {
//         "url": "http://app.alphaback.xyz/showcase",
//       });
//     }catch(e){
//       console.error("unable to update tab url: ", e)
//     }
//   }
// });