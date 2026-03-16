import React from "react";

interface ChatMessageProps {
  message: string;
  sender?: string;
}

const ChatMessage = ({ message, sender = "user" }: ChatMessageProps) => {
  const isbot = sender === "robot";

  const img = isbot ? "robot.png" : "user.png";

  return (
    <div>
      {sender === "robot" && <img src={img} alt={sender} width={30} />}
      {message}
      {sender === "user" && <img src={img} alt={sender} width={30} />}
    </div>
  );
};

export default ChatMessage;
