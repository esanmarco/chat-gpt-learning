import { create } from "zustand";
import { PromptInput } from "../hooks/useGenerateMessage";

interface MessageStore {
  messages: PromptInput[];
}

export const useMessageStore = create<MessageStore>(() => ({
  messages: [],
}));
