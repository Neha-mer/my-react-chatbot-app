import { useState } from "react";
import "./App.css";
import Chat from "./Components/ChatInput";
import ChatMessages from "./Components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message:
        "Hello! I'm your AI assistant powered by Ollama. How can I help you today?",
      sender: "robot",
      id: "welcome",
    },
  ]);
  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <Chat
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      ></Chat>
    </div>
  );
}

export default App;
