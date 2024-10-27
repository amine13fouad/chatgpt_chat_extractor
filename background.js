// Function to generate and store XML data
function saveXmlData(isTemporary) {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (tempFlag) => {
                const questions = [];
                const answers = [];
                const questionElements = document.querySelectorAll('[data-message-author-role="user"]');
                const answerElements = document.querySelectorAll('[data-message-author-role="assistant"]');

                questionElements.forEach(element => questions.push(element.innerText.trim()));
                answerElements.forEach(element => answers.push(element.innerText.trim()));

                let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<conversation>';
                xmlString += `\n  <temporary>${tempFlag ? 'true' : 'false'}</temporary>`;
                for (let i = 0; i < Math.max(questions.length, answers.length); i++) {
                    xmlString += `\n  <turn>`;
                    if (questions[i]) xmlString += `\n    <question>${questions[i]}</question>`;
                    if (answers[i]) xmlString += `\n    <answer>${answers[i]}</answer>`;
                    xmlString += `\n  </turn>`;
                }
                xmlString += '\n</conversation>';
                
                // Save XML to chrome.storage.local
                chrome.storage.local.set({ xmlData: xmlString }, () => {
                    console.log("Background.js: XML data saved successfully with temporary flag:", tempFlag);
                });
            },
            args: [isTemporary] // Pass the temporary flag as an argument
        });
    });
}

// Listen for requests from popup to generate XML
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'generateXml') {
        saveXmlData(request.isTemporary);
    } else if (request.action === 'getXmlString') {
        chrome.storage.local.get(['xmlData'], result => {
            console.log("Background.js: Retrieved XML data:", result.xmlData);
            sendResponse({ xmlString: result.xmlData || '' });
        });
        return true; // Keeps the message channel open for async sendResponse
    }
});
