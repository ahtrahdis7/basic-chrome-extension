document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleBackground');
    const statusDiv = document.getElementById('status');

    toggleButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "toggleBackground"}, function(response) {
                alert(response);
                if (response && response.success) {
                    statusDiv.textContent = response.visible ? "Custom background is visible" : "Custom background is hidden";
                } else {
                    statusDiv.textContent = "Error toggling background";
                }
            });
        });
    });
});
