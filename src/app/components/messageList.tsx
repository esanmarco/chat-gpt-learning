"use client";

import { useMessageStore } from "../stores/messageStore";

export default function MessageList() {
  const { messages, fetching } = useMessageStore();

  return (
    <>
      <div className="flex flex-col flex-1 p-6 border-2 rounded grow border-slate-700">
        {messages.map((message, index) => {
          return (
            <div
              key={`message-${index}`}
              className={`flex flex-row ${
                message.role === "assistant" ? "bg-black" : "bg-blue-300"
              }`}
            >
              {message.content}
            </div>
          );
        })}

        {fetching && <div>Loading.....</div>}
      </div>
    </>
  );
}
