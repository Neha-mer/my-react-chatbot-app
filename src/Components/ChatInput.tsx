import React from "react";

const Chat = () => {
  return (
    <>
      <div>
        <h1>Chat Component</h1>
        <input
          className="chat-input"
          placeholder="Type a message..."
          size={30}
        ></input>
        <button className="send-button">Send</button>
      </div>
    </>
  );
};

export default Chat;
