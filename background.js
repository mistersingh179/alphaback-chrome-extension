console.log("this is background.js");

chrome.runtime.onInstalled.addListener(async (details) => {
  console.log("OnInstalled event: ", details, details?.reason);
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // Code to be executed on first install
    // eg. open a tab with a url
    let url = chrome.runtime.getURL("/build/index.html#/how-it-works");
    console.log('let us show them the works: ', url);
    let tab = await chrome.tabs.create({ url });
    console.log(`Created tab ${tab.id}`);
    chrome.runtime.setUninstallURL("https://leaderboard.alphaback.xyz/#/uninstall");
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    console.log("we have been updated from: ", details?.previousVersion)
    chrome.runtime.setUninstallURL("https://leaderboard.alphaback.xyz/#/uninstall");
    // When extension is updated
  } else if (details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE) {
    // When browser is updated
  } else if (details.reason === chrome.runtime.OnInstalledReason.SHARED_MODULE_UPDATE) {
    // When a shared module is updated
  }
});
