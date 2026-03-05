import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./Components/ChatInput";
import ChatMessage from "./Components/ChatMessage";

function App() {
  return (
    <>
      <Chat></Chat>
      <ChatMessage message="hello chatbot" sender="user"></ChatMessage>
      <ChatMessage message="How can I help you?" sender="bot"></ChatMessage>
      <ChatMessage
        message="can you get me today's date?"
        sender="user"
      ></ChatMessage>
      <ChatMessage message="today is 5th of March" sender="bot"></ChatMessage>
      <ChatMessage message="how about a flip coin?" sender="user"></ChatMessage>
      <ChatMessage message="sure you got tails?" sender="bot"></ChatMessage>
    </>
  );
}

export default App;
