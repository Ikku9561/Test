document.addEventListener("DOMContentLoaded", function() {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        appendMessage("You", userMessage);

        // Simulate AI response (replace with your AI library's code)
        const aiResponse = simulateAIResponse(userMessage);
        appendMessage("AI", aiResponse);

        userInput.value = "";
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = sender.toLowerCase();
        messageElement.textContent = `${sender}: ${message}`;
        chatLog.appendChild(messageElement);
    }

    function simulateAIResponse(userMessage) {
        // Simulate AI response logic here
        return "This is a simulated AI response.";
    }
});
