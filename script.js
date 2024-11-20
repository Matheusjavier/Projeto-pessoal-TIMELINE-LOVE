function showMessage(message) {
    const messageBox = document.getElementById('message-box');
    const messageText = document.getElementById('message');
    messageText.textContent = message;
    messageBox.classList.remove('hidden');
}

function hideMessage() {
    const messageBox = document.getElementById('message-box');
    messageBox.classList.add('hidden');
}