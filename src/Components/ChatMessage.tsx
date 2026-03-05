import React from "react";

interface ChatMessageProps {
  message: string;
  sender?: "user" | "bot";
}

const ChatMessage = ({ message, sender = "user" }: ChatMessageProps) => {
  const isbot = sender === "bot";

  const img = isbot ? "robot.png" : "user.png";

  return (
    <div>
      {sender === "bot" && <img src={img} alt={sender} width={30} />}
      {message}
      {sender === "user" && <img src={img} alt={sender} width={30} />}
    </div>
  );
};

export default ChatMessage;
