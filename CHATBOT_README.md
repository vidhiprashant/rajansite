# JavaScript Chatbot Conversion Guide

I've converted your Python Flask chatbot to JavaScript. Here's what you have:

## Files Created

1. **chatbot.js** - Node.js/Express server (replacement for Flask app)
2. **js/chatbot-client.js** - Client-side JavaScript library to interact with the chatbot
3. **chatbot-demo.html** - Example HTML page with a working chatbot interface
4. **package.json** - Node.js dependencies configuration

## Setup Instructions

### Step 1: Install Node.js
Download and install from: https://nodejs.org/

### Step 2: Install Dependencies
Open PowerShell/Terminal in your project folder and run:
```
npm install
```

### Step 3: Start the Chatbot Server
```
npm start
```
or for auto-reload during development:
```
npm run dev
```

The server will run on: **http://localhost:5000**

### Step 4: Test the Chatbot
Open **chatbot-demo.html** in your browser and start chatting!

## How to Integrate into Your Website

### Option 1: Embed in Existing HTML Pages

Add these lines to any HTML page where you want the chatbot:

```html
<!-- Add before closing </body> tag -->
<link rel="stylesheet" href="css/chatbot-styles.css">
<div id="chatbot-widget" class="chatbot-container">
    <div class="chat-header">💬 Support</div>
    <div class="chat-messages" id="chatMessages"></div>
    <div class="chat-input-area">
        <input 
            type="text" 
            id="chatInput" 
            class="chat-input" 
            placeholder="Ask about services, contact, or location..."
            onkeypress="if(event.key === 'Enter') handleChatSubmit(document.getElementById('chatInput'), document.getElementById('chatMessages'))"
        >
        <button 
            class="chat-submit" 
            onclick="handleChatSubmit(document.getElementById('chatInput'), document.getElementById('chatMessages'))"
        >
            Send
        </button>
    </div>
</div>

<script src="js/chatbot-client.js"></script>
```

### Option 2: Customize the API URL
If your server runs on a different URL, update `js/chatbot-client.js`:

```javascript
const chatbot = new Chatbot('http://your-domain.com:5000');
```

## Key Differences from Python

| Feature | Python | JavaScript |
|---------|--------|-----------|
| Framework | Flask | Express |
| Start Command | `python chatbot.py` | `node chatbot.js` or `npm start` |
| Message Format | JSON | JSON |
| Port | 5000 | 5000 |
| CORS | flask_cors | cors |

## Testing

Try these messages in the chatbot:
- "What services do you provide?"
- "How do I contact you?"
- "Where are you located?"
- "Any random text"

## API Endpoint

**POST** `/chat`

Request:
```json
{
  "msg": "your message"
}
```

Response:
```json
"Bot response message"
```

## Troubleshooting

1. **"Cannot find module"** → Run `npm install`
2. **Port 5000 already in use** → Change PORT in chatbot.js or stop the other process
3. **CORS error** → Make sure the server is running and cors is installed
4. **No response** → Check browser console (F12) for errors

## Production Deployment

For production, consider deploying to:
- **Heroku** - Free tier available
- **AWS** - Elastic Beanstalk
- **DigitalOcean** - Easy setup
- **Replit** - Simple hosting

Let me know if you need any modifications!
