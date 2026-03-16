import React from "react";

type ChatMessage = {
  message: string;
  sender: string;
  id: string;
};

interface ChatProps {
  chatMessages: ChatMessage[];
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const Chat: React.FC<ChatProps> = ({ chatMessages, setChatMessages }) => {
  const [savedInput, setSavedInput] = React.useState("");
  function saveInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSavedInput(event.target.value);
  }

  function sendMessage() {
    setChatMessages([
      ...chatMessages,
      {
        message: savedInput,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ]);
  }
  return (
    <>
      <div>
        <h1>Chat Component</h1>
        <input
          className="chat-input"
          placeholder="Type a message..."
          size={30}
          onChange={saveInput}
        ></input>
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
};

export default Chat;
