📄 Q&A Extractor - Chrome Extension

Q&A Extractor is a Chrome extension designed to extract and structure question-and-answer pairs from chat-based web pages. Save conversations as XML files and organize information easily. With this extension, you can also mark chats as temporary, which is recorded in the XML output.

✨ Features
🗨️ Extract Q&A pairs from chat-based websites.
📌 Temporary Chat Option: Mark conversations as temporary, recorded in the XML file.
📑 Beautified XML Output: Formatted for readability.
💾 Download XML File: Save extracted data with one click.
📸 Screenshots
Main Interface

XML Download Example

🛠️ Installation
Clone this repository or download the ZIP.

bash
Copy code
git clone https://github.com/yourusername/qa-extractor.git
Open Chrome Extensions Page:

Go to chrome://extensions/ in Chrome.
Enable Developer mode.
Load the Extension:

Click Load unpacked and select the qa-extractor directory.
Confirm Installation:

You should see the Q&A Extractor icon in your Chrome toolbar.
🚀 Usage
Open a Chat-Based Page:

Navigate to a webpage containing a chat interface with questions and answers.
Click the Q&A Extractor Icon:

Open the extension by clicking its icon in the Chrome toolbar.
Specify if Chat is Temporary:

Use the Temporary Chat checkbox to mark the conversation as temporary. This adds a <temporary> tag in the XML output.
Click “Extract Q&A”:

The extracted Q&A pairs will be displayed in XML format in the text area.
If the XML is empty, ensure the page has question-and-answer elements with the specified attributes.
Download the XML File:

Click Download XML to save the data as a file.
📂 Project Structure
manifest.json: Defines extension permissions, background script, and icons.
background.js: Manages XML generation and communicates between content scripts and the popup interface.
content.js: Extracts Q&A pairs from supported web pages.
popup.js: Handles user interactions within the extension popup.
popup.html: Provides the popup interface.
icons: Contains the extension icons for Chrome and the Chrome Web Store.
screenshots: Screenshots for documentation.
🔧 Customization
🔄 Changing the Icon
Replace the icons with your own versions in sizes 16x16, 48x48, and 128x128.
Update the manifest.json file if the new icons have different filenames.
🛠️ Adjusting XML Formatting
Modify saveXmlData in background.js to customize the XML structure. This allows you to add custom tags or additional data.

🤝 Contributing
Contributions are welcome! If you'd like to improve this project:

Fork this repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.
📜 License
This project is licensed under the MIT License.

📬 Contact
For questions or support, please reach out to:

Name: [Your Name]
Email: [your.email@example.com]
GitHub: https://github.com/yourusername
LinkedIn: https://www.linkedin.com/in/yourprofile
🥂 Enjoy extracting Q&A data effortlessly with Q&A Extractor! 🎉
