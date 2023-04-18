import { create } from "zustand";

interface MessageStore {
  messages: string[];
}

export const useMessageStore = create<MessageStore>(() => ({
  messages: [],
}));
