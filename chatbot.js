const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Bot responses data
const botResponses = {
  services: [
    "We provide the following services: Civil, HVAC, Electrical, Plumbing, and IT services.",
    "Our main services include: Civil Engineering, HVAC Systems, Electrical work, Plumbing, and Information Technology solutions."
  ],
  contact: [
    "You can reach us at: +91 9725482695",
    "Contact us: 📞 +91 9725482695 for any inquiries."
  ],
  location: [
    "We are located in Ahmedabad, Gujarat, India.",
    "Our office is based in Ahmedabad, Gujarat."
  ],
  default: [
    "I'm here to help! Please ask about our services, how to contact us, or our location.",
    "Feel free to ask me about services, contact information, or where we're located.",
    "How can I help you today? You can ask about services, contact details, or location."
  ]
};

// Function to get random response
function getRandomResponse(responseArray) {
  return responseArray[Math.floor(Math.random() * responseArray.length)];
}

app.post('/chat', (req, res) => {
  try {
    const msg = req.body.msg.toLowerCase().trim();

    if (msg.includes("service") || msg.includes("what do you do")) {
      return res.json(getRandomResponse(botResponses.services));
    } else if (msg.includes("contact") || msg.includes("call") || msg.includes("phone")) {
      return res.json(getRandomResponse(botResponses.contact));
    } else if (msg.includes("location") || msg.includes("where") || msg.includes("address")) {
      return res.json(getRandomResponse(botResponses.location));
    } else {
      return res.json(getRandomResponse(botResponses.default));
    }
  } catch (error) {
    console.error('Error processing message:', error);
    return res.status(500).json("Sorry, there was an error processing your request.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Chatbot server running on http://localhost:${PORT}`);
});
