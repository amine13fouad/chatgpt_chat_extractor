<h1 align="center">📄 ChatGPT Q&A Extractor - Chrome Extension</h1>

<p align="center">
    <img src="icon128.png" alt="Q&A Extractor Icon" width="128">
</p>

<p align="center">
    <strong>ChatGPT Q&A Extractor</strong> is a Chrome extension designed to extract and structure question-and-answer pairs from chat-based web pages. Save conversations as XML files and organize information easily. With this extension, you can also mark chats as temporary, which is recorded in the XML output.
</p>

<hr>

<h2>✨ Features</h2>

<ul>
  <li>🗨️ <strong>Extract Q&A pairs</strong> from chat-based websites.</li>
  <li>📌 <strong>Temporary Chat Option</strong>: Mark conversations as temporary, recorded in the XML file.</li>
  <li>📑 <strong>Beautified XML Output</strong>: Formatted for readability.</li>
  <li>💾 <strong>Download XML File</strong>: Save extracted data with one click.</li>
</ul>

<hr>

<h2>🛠️ Installation</h2>

<ol>
  <li><strong>Clone this repository</strong> or <a href="https://github.com/amine13fouad/chatgpt_chat_extractor/archive/refs/heads/main.zip">download the ZIP</a>.
    <pre><code>git clone https://github.com/amine13fouad/chatgpt_chat_extractor.git</code></pre>
  </li>
  <li><strong>Open Chrome Extensions Page</strong>:
    <ul>
      <li>Go to <code>chrome://extensions/</code> in Chrome.</li>
      <li>Enable <strong>Developer mode</strong>.</li>
    </ul>
  </li>
  <li><strong>Load the Extension</strong>:
    <ul>
      <li>Click <strong>Load unpacked</strong> and select the <code>chatgpt_chat_extractor</code> directory.</li>
    </ul>
  </li>
  <li><strong>Confirm Installation</strong>:
    <ul>
      <li>You should see the ChatGPT Q&A Extractor icon in your Chrome toolbar.</li>
    </ul>
  </li>
</ol>

<hr>

<h2>🚀 Usage</h2>

<ol>
  <li><strong>Open a Chat-Based Page</strong>:
    <ul>
      <li>Navigate to a webpage containing a chat interface with questions and answers.</li>
    </ul>
  </li>
  <li><strong>Click the Q&A Extractor Icon</strong>:
    <ul>
      <li>Open the extension by clicking its icon in the Chrome toolbar.</li>
    </ul>
  </li>
  <li><strong>Specify if Chat is Temporary</strong>:
    <ul>
      <li>Use the <strong>Temporary Chat</strong> checkbox to mark the conversation as temporary. This adds a <code>&lt;temporary&gt;</code> tag in the XML output.</li>
    </ul>
  </li>
  <li><strong>Click “Extract Q&A”</strong>:
    <ul>
      <li>The extracted Q&A pairs will be displayed in XML format in the text area.</li>
      <li>If the XML is empty, ensure the page has question-and-answer elements with the specified attributes.</li>
    </ul>
  </li>
  <li><strong>Download the XML File</strong>:
    <ul>
      <li>Click <strong>Download XML</strong> to save the data as a file.</li>
    </ul>
  </li>
</ol>

<hr>

<h2>📂 Project Structure</h2>

<ul>
  <li><code>manifest.json</code>: Defines extension permissions, background script, and icons.</li>
  <li><code>background.js</code>: Manages XML generation and communicates between content scripts and the popup interface.</li>
  <li><code>content.js</code>: Extracts Q&A pairs from supported web pages.</li>
  <li><code>popup.js</code>: Handles user interactions within the extension popup.</li>
  <li><code>popup.html</code>: Provides the popup interface.</li>
  <li><code>icons</code>: Contains the extension icons for Chrome and the Chrome Web Store.</li>
  <li><code>screenshots</code>: Screenshots for documentation.</li>
</ul>

<hr>

<h2>🔧 Customization</h2>

<h3>🔄 Changing the Icon</h3>
<ol>
  <li>Replace the icons with your own versions in sizes <strong>16x16</strong>, <strong>48x48</strong>, and <strong>128x128</strong>.</li>
  <li>Update the <code>manifest.json</code> file if the new icons have different filenames.</li>
</ol>

<h3>🛠️ Adjusting XML Formatting</h3>
<p>Modify <code>saveXmlData</code> in <code>background.js</code> to customize the XML structure. This allows you to add custom tags or additional data.</p>

<hr>

<h2>🤝 Contributing</h2>

<p>Contributions are welcome! If you'd like to improve this project:</p>
<ol>
  <li>Fork this repository.</li>
  <li>Create a new branch (<code>git checkout -b feature/YourFeature</code>).</li>
  <li>Commit your changes (<code>git commit -m 'Add new feature'</code>).</li>
  <li>Push to the branch (<code>git push origin feature/YourFeature</code>).</li>
  <li>Open a Pull Request.</li>
</ol>

<hr>

<h2>📬 Contact</h2>

<p>For questions or support, please reach out to:</p>

<ul>
  <li><strong>Name</strong>: Amine FOUAD</li>
  <li><strong>Email</strong>: amine13fouad@gmail.com</li>
  <li><strong>GitHub</strong>: <a href="https://github.com/amine13fouad">https://github.com/amine13fouad</a></li>
  <li><strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/amine-fouad">https://www.linkedin.com/in/amine-fouad</a></li>
</ul>

<hr>

<h3 align="center"> 🥂 Enjoy extracting ChatGPT Q&A data effortlessly with ChatGPT Q&A Extractor! 🎉</h3>

<hr>
