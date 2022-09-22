// let color = '#3aa757';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });

try {

    // ON page change
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      if(changeInfo.status == 'complete'){
      //if (changeInfo.url)
        chrome.scripting.executeScript({
          files: ['contentScript.js'],
          target: {tabId: tab.id}
        });
      }
    });
}catch(e){
  console.log(e);
}