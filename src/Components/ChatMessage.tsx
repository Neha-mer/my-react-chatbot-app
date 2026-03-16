import React from "react";

interface ChatMessageProps {
  message: string;
  sender?: string;
}

const ChatMessage = ({ message, sender = "user" }: ChatMessageProps) => {
  const isbot = sender === "robot";

  const img = isbot ? "robot.png" : "user.png";

  return (
    <div
      className={
        sender === "robot"
          ? "robot-message-container"
          : "user-message-container"
      }
    >
      {sender === "robot" && <img src={img} alt={sender} width={30} />}
      <div className="message-container">{message}</div>
      {sender === "user" && <img src={img} alt={sender} width={30} />}
    </div>
  );
};

export default ChatMessage;
