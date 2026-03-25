// Client-side chatbot handler
class Chatbot {
  constructor(apiUrl = 'http://localhost:5000') {
    this.apiUrl = apiUrl;
  }

  async sendMessage(userMessage) {
    try {
      const response = await fetch(`${this.apiUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ msg: userMessage })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const reply = await response.json();
      return reply;
    } catch (error) {
      console.error('Chatbot Error:', error);
      return '⚠️ Sorry, the chatbot server is currently offline. Please try again later or contact us at +91 9725482695.';
    }
  }
}

// Initialize chatbot (can be used in your HTML)
const chatbot = new Chatbot();

// Example usage function
async function handleChatSubmit(inputElement, outputElement) {
  const userMessage = inputElement.value.trim();
  
  if (!userMessage) return;

  // Display user message
  if (outputElement) {
    outputElement.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
  }

  // Get bot response
  const botResponse = await chatbot.sendMessage(userMessage);
  
  // Display bot response
  if (outputElement) {
    outputElement.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    outputElement.scrollTop = outputElement.scrollHeight;
  }

  // Clear input
  inputElement.value = '';
}
