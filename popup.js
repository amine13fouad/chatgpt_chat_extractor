// Beautify XML string with indentation
function beautifyXml(xml) {
    const PADDING = '  ';
    const reg = /(>)(<)(\/*)/g;
    let formatted = '';
    let pad = 0;

    xml = xml.replace(reg, '$1\r\n$2$3');
    xml.split('\r\n').forEach((node) => {
        let indent = 0;
        if (node.match(/.+<\/\w[^>]*>$/)) {
            indent = 0;
        } else if (node.match(/^<\/\w/) && pad !== 0) {
            pad -= 1;
        } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
            indent = 1;
        } else {
            indent = 0;
        }

        formatted += PADDING.repeat(pad) + node + '\r\n';
        pad += indent;
    });

    return formatted.trim();
}

// Function to download XML data as a file
function downloadXmlFile(xmlData) {
    const blob = new Blob([xmlData], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Q&A_Extraction.xml';
    a.click();

    URL.revokeObjectURL(url); // Clean up the URL object
}

document.getElementById('extractButton').addEventListener('click', () => {
    const isTemporary = document.getElementById('temporaryChatCheckbox').checked;

    // Send message to generate XML with 'isTemporary' state
    chrome.runtime.sendMessage({ action: 'generateXml', isTemporary: isTemporary }, () => {
        console.log("Popup.js: Triggered XML data generation in background.js with temporary flag:", isTemporary);
    });

    // Retrieve XML data after generation
    setTimeout(() => {
        chrome.runtime.sendMessage({ action: 'getXmlString' }, (response) => {
            const textArea = document.getElementById('result');
            console.log("Popup.js: Received XML data:", response);

            if (response && response.xmlString) {
                const beautifiedXml = beautifyXml(response.xmlString);
                textArea.value = beautifiedXml;

                // Save beautified XML in a global variable for download
                window.generatedXmlData = beautifiedXml;
            } else {
                textArea.value = 'No data found - Please ensure data is available on the page.';
            }
        });
    }, 1000); // Delay to allow XML generation
});

// Add event listener for download button
document.getElementById('downloadButton').addEventListener('click', () => {
    if (window.generatedXmlData) {
        downloadXmlFile(window.generatedXmlData);
    } else {
        alert('Please extract Q&A data first before downloading.');
    }
});
