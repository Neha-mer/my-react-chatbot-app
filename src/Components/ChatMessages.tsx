import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

interface ChatMessagesProps {
  chatMessages: {
    message: string;
    sender: string;
    id: string;
  }[];
}
const ChatMessages = ({ chatMessages }: ChatMessagesProps) => {
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = chatMessagesRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
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
