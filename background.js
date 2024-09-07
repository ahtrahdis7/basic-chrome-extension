// Listen for when the extension is first installed or updated
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === "install") {
        console.log("Extension installed");
        // You can add initialization logic here
    } else if (details.reason === "update") {
        console.log("Extension updated");
        // You can add update logic here
    }
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getData") {
        // Example of handling a message
        sendResponse({ data: "Some data from background script" });
    }
    // Be sure to return true if you want to send a response asynchronously
    return true;
});
