# 💬 Simple React Chatbot

A basic chatbot application built using React. This project demonstrates core React concepts such as component structure, state management, props, and handling user input.

---

## 🚀 Features

* User can send messages
* Chat messages displayed in real-time
* Simple bot response (rule-based)
* Unique message IDs using `crypto.randomUUID()`
* Clean component-based architecture

---

## 🧱 Project Structure

```
src/
│
├── Components/
│   ├── ChatInput.tsx      # Input box and send button
│   ├── ChatMessages.tsx   # Message list container
│   ├── ChatMessage.tsx    # Single message UI
│
├── App.tsx                # Main app component
├── App.css                # Styling
```

---

## ⚙️ Technologies Used

* React
* TypeScript
* Vite (for fast development)
* CSS

---

## 🧠 How It Works

1. User types a message in the input field
2. Message is stored in state (`chatMessages`)
3. Message is displayed in the UI
4. If message contains keywords (e.g., "hello"), bot responds automatically
5. State updates trigger re-render

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project folder
cd react-chatbot

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📝 Example Chat Flow

```
User: hello
Bot: How can I help you?
```

---

## 💡 Key Concepts Used

* React Hooks (`useState`)
* Controlled components (input handling)
* Props drilling between components
* Immutable state updates
* Conditional rendering

---

## 🚀 Future Improvements

* Add API-based AI responses
* Typing indicator for bot
* Auto-scroll to latest message
* Send message on Enter key press
* Better UI/UX styling
* Use `useReducer` for complex state management

---

## 📸 Screenshots

*Add screenshots here if needed*

---

## 👩‍💻 Author

Built as a learning project to strengthen React fundamentals and prepare for frontend/backend interviews.

---

## ⭐ Acknowledgements

Inspired by modern chat applications like ChatGPT and messaging platforms.

---

