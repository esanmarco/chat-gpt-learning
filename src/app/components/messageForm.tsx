"use client";

import { useState } from "react";
import useGenerateMessage, { Role } from "../hooks/useGenerateMessage";
import { useMessageStore } from "../stores/messageStore";

export default function MessageForm() {
  const { mutate, isLoading } = useGenerateMessage();
  const [newMessage, setNewMessage] = useState("");
  const { messages } = useMessageStore();

  const handleSubmit = () => {
    if (!newMessage.length) return;

    const payload = [
      ...messages,
      {
        role: "user" as Role,
        content: newMessage,
        created: Math.floor(Date.now() / 1000),
      },
    ];

    mutate(payload as any);
  };

  return (
    <div className="flex flex-col flex-shrink-0 mt-5">
      <textarea
        onChange={(e) => setNewMessage(e.target.value)}
        className="w-full textarea textarea-bordered"
        placeholder="Ask CHATGPT a question!"
      />
      <button
        onClick={handleSubmit}
        className={`flex self-end mt-3 btn btn-primary ${
          isLoading ? "loading" : ""
        }`}
      >
        Ask!
      </button>
    </div>
  );
}
