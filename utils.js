// utils.js

const Utils = {
    // Example: Format a date
    formatDate: function(date) {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    // Example: Generate a random color
    getRandomColor: function() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },

    // Example: Debounce function to limit how often a function can be called
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Example: Save data to chrome.storage
    saveData: function(key, value) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set({[key]: value}, function() {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    },

    // Example: Retrieve data from chrome.storage
    getData: function(key) {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get([key], function(result) {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result[key]);
                }
            });
        });
    }
};

// If you want to use this in other scripts, you might need to export it
// For content scripts or popup scripts:
// window.Utils = Utils;

// For background scripts or if using modules:
// export default Utils;
