function start() {
  // remove old context menus
  chrome.contextMenus.removeAll(function () {
    initContextMenus();
  });
}

function initContextMenus() {
  chrome.contextMenus.create({
    id: 'generate-password',
    title: 'Generate Password',
  });
}

function callback(url) {
  let targetUrl = 'password-generator/index.html';

  const currentUrl = new URL(url);
  if (currentUrl.protocol === 'http:' || currentUrl.protocol === 'https:') {
    targetUrl += '?publicKey=' + currentUrl.hostname;
  }

  // go
  chrome.tabs.create({
    url: targetUrl,
  });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  callback(tab.url);
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  callback(tab.url);
});

// start
start();
