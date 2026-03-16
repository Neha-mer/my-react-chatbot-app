import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./Components/ChatInput";
import ChatMessage from "./Components/ChatMessage";
import ChatMessages from "./Components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is September 27",
      sender: "robot",
      id: "id4",
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
