import { useState } from "react";
import Chatbot from "supersimpledev";

interface Message {
  message: string;
  sender: string;
  id: string;
}

interface ChatProps {
  chatMessages: Message[];
  setChatMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const Chat = ({ chatMessages, setChatMessages }: ChatProps) => {
  const [savedInput, setSavedInput] = useState("");
  function saveInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSavedInput(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: savedInput,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    if (savedInput.toLowerCase().includes("hello")) {
      setChatMessages([
        ...newChatMessages,
        {
          message: "How can I help you?",
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }

    if (savedInput.toLowerCase().includes("are you a bot")) {
      setChatMessages([
        ...newChatMessages,
        {
          message: "Yes, I am a bot created to assist you.",
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }
    setSavedInput("");
  }

  return (
    <div className="chat-container">
      <input
        className="chat-input"
        placeholder="Type a message..."
        size={30}
        value={savedInput}
        onChange={saveInput}
      ></input>
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default Chat;
