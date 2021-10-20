// Script only runs on crossword pages
const allowedURLs = [
  "https://www.theguardian.com/crosswords/quiptic/",
  "https://www.theguardian.com/crosswords/cryptic/",
  "https://www.theguardian.com/crosswords/everyman/"
];

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status === "complete" &&
    allowedURLs.some((url) => tab.url.includes(url)) &&
    !document.querySelector('#cryptic_crossword_help')
  ) {
    chrome.tabs.executeScript(
      tabId,
      { file: "./inject_script.js" },
      function () {
        chrome.tabs.executeScript(
          tabId,
          { file: "./foreground.bundle.js" },
          function () {
            console.log("INJECTED AND EXECUTED");
          }
        );
      }
    );
  }
});
