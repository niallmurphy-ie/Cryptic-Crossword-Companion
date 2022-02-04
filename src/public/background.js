// Script only runs on crossword pages
const allowedURLs = [
	'https://www.theguardian.com/crosswords/quiptic/',
	'https://www.theguardian.com/crosswords/cryptic/',
	'https://www.theguardian.com/crosswords/everyman/',
];

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(tabId);
	if (
		changeInfo.status === 'complete' &&
		allowedURLs.some((url) => tab.url.includes(url))
		// && !document.querySelector('#cryptic_crossword_help')
	) {
		chrome.scripting.executeScript(
			{ target: { tabId }, files: ['./inject_script.js'] },

			function () {
				chrome.scripting.executeScript(
					tabId,
					{ injection: './foreground.bundle.js' },
					function () {
						console.log('INJECTED AND EXECUTED');
					}
				);
			}
		);
	}
});
