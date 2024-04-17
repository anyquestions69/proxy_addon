function logURL(requestDetails) {
    console.log(`Loading: ${requestDetails.url}`);
    location="http://localhost:3000/"+requestDetails.url.split('.com/')[1]
  }
  
  window.chrome.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["*://api.gotinder.com/*"],
  });
  browser.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["*://api.gotinder.com/*"],
  });
  