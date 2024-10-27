const questions = [];
const answers = [];

const questionElements = document.querySelectorAll('[data-message-author-role="user"]');
const answerElements = document.querySelectorAll('[data-message-author-role="assistant"]');

questionElements.forEach(element => questions.push(element.innerText.trim()));
answerElements.forEach(element => answers.push(element.innerText.trim()));

let xmlString = '<?xml version="1.0" encoding="UTF-8"?>\n<conversation>';
for (let i = 0; i < Math.max(questions.length, answers.length); i++) {
    xmlString += `\n  <turn>`;
    if (questions[i]) xmlString += `\n    <question>${questions[i]}</question>`;
    if (answers[i]) xmlString += `\n    <answer>${answers[i]}</answer>`;
    xmlString += `\n  </turn>`;
}
xmlString += '\n</conversation>';

console.log("Attempting to save XML data:", xmlString);

// Attempt to store XML data in chrome.storage.local
chrome.storage.local.set({ xmlData: xmlString }, () => {
    if (chrome.runtime.lastError) {
        console.error("Error saving XML data to storage:", chrome.runtime.lastError);
    } else {
        console.log("XML data saved successfully.");
        
        // Immediately retrieve to confirm storage
        chrome.storage.local.get(['xmlData'], result => {
            console.log("Retrieved XML data from storage for verification:", result.xmlData);
        });
    }
});
