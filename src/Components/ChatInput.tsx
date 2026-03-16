import React from "react";

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

    setSavedInput("");
  }

  function getMessageFromBot() {
    setChatMessages([
      ...chatMessages,
      {
        message: "This is a response from the bot",
        sender: "robot",
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
          value={savedInput}
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
