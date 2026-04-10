import { useState } from "react";

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

  async function sendMessage() {
    if (!savedInput.trim()) return;

    const newChatMessages = [
      ...chatMessages,
      {
        message: savedInput,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);
    setSavedInput("");

    const typingId = crypto.randomUUID();
    setChatMessages((prev) => [
      ...prev,
      {
        message: "Typing...",
        sender: "robot",
        id: typingId,
      },
    ]);

    // Build prompt from conversation history
    const prompt =
      newChatMessages.map((m) => `${m.sender}: ${m.message}`).join("\n") +
      "\nrobot:";

    try {
      console.log("Sending to Ollama - Prompt:", prompt);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama2",
          prompt: prompt,
          stream: false,
        }),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error(
          `Failed to fetch from Ollama: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      console.log("Ollama response data:", data);

      if (!data.response) {
        throw new Error("No response field in Ollama response");
      }

      setChatMessages((prev) =>
        prev.map((m) =>
          m.id === typingId ? { ...m, message: data.response.trim() } : m,
        ),
      );
    } catch (error) {
      console.error("Error calling Ollama:", error);
      setChatMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? {
                ...m,
                message: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
              }
            : m,
        ),
      );
    }
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
