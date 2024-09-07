// content.js

console.log("Content script loaded");

function isNewTabPage() {
    return window.location.href === "chrome://newtab/" || window.location.href === "chrome://new-tab-page/";
}

function changeBackground() {
    if (!isNewTabPage()) {
        console.log("Not a new tab page, skipping background change");
        return;
    }

    console.log("Changing background for new tab page");

    // Remove existing content
    document.body.innerHTML = '';

    // Create a new div for the background
    const backgroundDiv = document.createElement('div');
    backgroundDiv.id = 'custom-background';
    
    // Add some lorem ipsum text
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    // Create multiple paragraphs of lorem ipsum
    for (let i = 0; i < 5; i++) {
        const paragraph = document.createElement('p');
        paragraph.textContent = loremIpsum;
        backgroundDiv.appendChild(paragraph);
    }
    
    // Append the background div to the body
    document.body.appendChild(backgroundDiv);
    
    // Apply styles
    applyStyles();
}

function applyStyles() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        #custom-background {
            padding: 20px;
            box-sizing: border-box;
        }
        #custom-background p {
            color: #333;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin-bottom: 20px;
        }
    `;
    document.head.appendChild(style);
}

// Run the function to change the background
changeBackground();

// We don't need the message listener for this version, so it's removed