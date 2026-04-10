# 💬 React Chatbot with Ollama

A modern chatbot application built using React and TypeScript, powered by Ollama's local AI models. This project demonstrates full-stack development with a React frontend and Ollama backend integration.

---

## 🚀 Features

* Real-time chat interface with AI responses
* Integration with Ollama's local AI models (Llama2)
* Typing indicator during AI response generation
* Clean component-based architecture
* TypeScript for type safety
* Unique message IDs using `crypto.randomUUID()`
* Error handling for API failures

---

## 🧱 Project Structure

```
src/
│
├── Components/
│   ├── ChatInput.tsx      # Input box and send button with Ollama API integration
│   ├── ChatMessages.tsx   # Message list container
│   ├── ChatMessage.tsx    # Single message UI
│
├── App.tsx                # Main app component
├── App.css                # Styling
```

---

## ⚙️ Technologies Used

* **Frontend:**
  * React 19
  * TypeScript
  * Vite (for fast development)
  * CSS

* **Backend:**
  * Ollama (local AI model server)
  * Llama2 model

---

## 🧠 How It Works

1. User types a message in the input field
2. Message is stored in state (`chatMessages`) and displayed
3. Frontend sends conversation history to Ollama API
4. Ollama generates AI response using Llama2 model
5. Response is displayed in the chat interface
6. State updates trigger re-render

---

## 📦 Installation & Setup

### Prerequisites

1. **Node.js** (v16 or higher)
2. **Ollama** installed and running locally

### Setup Steps

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project folder
cd my-react-chatbot-app

# Install dependencies
npm install

# Start Ollama (in a separate terminal)
ollama serve

# Pull the Llama2 model (first time only)
ollama pull llama2

# Run the development server
npm run dev
```

### Backend Setup

This frontend expects a backend server to proxy requests to Ollama. You'll need to set up a simple proxy server (e.g., using Express.js) that forwards `/api/generate` requests to your local Ollama instance.

Example backend setup (not included in this repo):
```javascript
// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/generate', async (req, res) => {
  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Proxy server running on port 3001'));
```

---

## 📝 Usage

1. Ensure Ollama is running with Llama2 model
2. Start your backend proxy server
3. Open the React app in your browser
4. Start chatting with the AI assistant!

### Example Chat Flow

```
User: Hello, how are you?
Bot: Hello! I'm doing well, thank you for asking. I'm an AI assistant powered by Ollama and the Llama2 model. How can I help you today?

User: What can you tell me about React?
Bot: React is a popular JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook (now Meta) and is known for its component-based architecture, virtual DOM, and efficient rendering...
```

---

## 💡 Key Concepts Used

* React Hooks (`useState`)
* Controlled components (input handling)
* Props drilling between components
* Immutable state updates
* Conditional rendering
* Async/await for API calls
* Error handling with try/catch
* TypeScript interfaces for type safety

---

## 🚀 Future Improvements

* Add conversation history persistence
* Support for multiple AI models
* Message timestamps
* Auto-scroll to latest message
* Send message on Enter key press
* Better UI/UX with animations
* Use `useReducer` for complex state management
* Add file upload capabilities
* Voice input/output features

---

## 📸 Screenshots

*Add screenshots of the chat interface here*

---

## 👩‍💻 Author

Built as a learning project to demonstrate React development and AI integration.

---

## ⭐ Acknowledgements

* [Ollama](https://ollama.ai/) for providing local AI model capabilities
* [React](https://reactjs.org/) for the frontend framework
* [Vite](https://vitejs.dev/) for fast development tooling

---

