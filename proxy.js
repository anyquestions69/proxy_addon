function logURL(requestDetails) {
    console.log(`Loading: ${requestDetails.url}`);
    location="http://localhost:3000/"+requestDetails.url.split('.com/')[1]
  }
  
  window.chrome.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["*://api.gotinder.com/*", "<all_urls>"],
  });
  chrome.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["*://api.gotinder.com/*", "<all_urls>"],
  });
  browser.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["*://api.gotinder.com/*", "<all_urls>"],
  });
  console.log('aaa')