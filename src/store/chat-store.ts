import { create } from "zustand";

export interface Friend {
  displayName: string;
  photoURL: string;
  lastMessage: string;
  roomid: string;
  uid: string;
}

interface ChatStore {
  friend: Friend | null;
  setFriend: (friend: Friend) => void;
  resetFriend: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  friend: null,
  setFriend: (friend: Friend) => set({ friend }),
  resetFriend: () => set({ friend: null }),
}));
