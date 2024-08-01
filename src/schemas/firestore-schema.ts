export interface UserRoom {
  roomid: string;
  lastMessage: string;
  timestamp: string;
  friendId: string;
}

// collection users
export interface UserDB {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
  friends: string[];
  rooms: UserRoom[];
}

export interface Message {
  message: string;
  timestamp: string;
  uid: string;
}

// collection rooms
export interface RoomDB {
  messages: Message[];
  users: string[];
}

// simulación de la base de datos

export const users: Record<string, UserDB> = {
  user1: {
    displayName: "user1",
    email: "user1@domain.com",
    photoURL: "https://...",
    uid: "user1",
    friends: ["user2"],
    rooms: [
      {
        roomid: "room1",
        lastMessage: "Hola",
        timestamp: "2021-07-10T15:00:00",
        friendId: "user2",
      },
    ],
  },
  user2: {
    displayName: "user2",
    email: "user2@domain.com",
    photoURL: "https://...",
    uid: "user2",
    friends: ["user1"],
    rooms: [
      {
        roomid: "room1",
        lastMessage: "Hola",
        timestamp: "2021-07-10T15:00:00",
        friendId: "user1",
      },
    ],
  },
};

export const rooms: Record<string, RoomDB> = {
  room1: {
    messages: [
      {
        message: "Hola",
        timestamp: "2021-07-10T15:00:00",
        uid: "user1",
      },
      {
        message: "Hola",
        timestamp: "2021-07-10T15:00:00",
        uid: "user2",
      },
    ],
    users: ["user1", "user2"],
  },
};
