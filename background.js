// All credit goes to Arieg419 - Link for original - https://github.com/Arieg419/MediumDarkMode

let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
    state = !state;
    return;
  }
  chrome.tabs.insertCSS(null, { file: "light_mode.css" });
  state = !state;
});

// All credit goes to Arieg419 - Link for original - https://github.com/Arieg419/MediumDarkMode
