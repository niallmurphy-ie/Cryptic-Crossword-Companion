// Script only runs on crossword pages
const allowedURLs = [
	'https://www.theguardian.com/crosswords/quiptic/',
	'https://www.theguardian.com/crosswords/cryptic/',
	'https://www.theguardian.com/crosswords/everyman/',
];

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (
		changeInfo.status === 'complete' &&
		allowedURLs.some((url) => tab.url.includes(url))
	) {
		chrome.scripting.executeScript({
			target: { tabId },
			files: ['./inject_script.js', './foreground.bundle.js'],
		});
	}
});
