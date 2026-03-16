import React from "react";
import ChatMessage from "./ChatMessage";

interface ChatMessagesProps {
  chatMessages: {
    message: string;
    sender: string;
    id: string;
  }[];
}
const ChatMessages = ({ chatMessages }: ChatMessagesProps) => {
  return (
    <div>
      {chatMessages.map((chatMessages) => {
        return (
          <ChatMessage
            message={chatMessages.message}
            sender={chatMessages.sender}
            key={chatMessages.id}
          ></ChatMessage>
        );
      })}
    </div>
  );
};

export default ChatMessages;
