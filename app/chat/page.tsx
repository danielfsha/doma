"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Chat() {
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    setMessages(["Hello", "How are you?", "I'm fine, thank you!"]);
  }, []);

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");

    console.log(input);
  };

  return (
    <div className="flex flex-col flex-1 overflow-hidden items-center justify-center">
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>

      <form
        onSubmit={handleSend}
        className="flex items-center justify-center gap-2"
      >
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
