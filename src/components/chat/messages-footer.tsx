import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserDB } from "@/schemas/firestore-schema";
import { Friend } from "@/store/chat-store";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import {
  arrayUnion,
  doc,
  Firestore,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useAuth, useFirestore } from "reactfire";

const updateLastMessage = async (
  db: Firestore,
  uid: string,
  roomid: string,
  message: string
) => {
  const userRef = doc(db, "users", uid);
  const { rooms } = (await getDoc(userRef)).data() as UserDB;

  const roomUpdateLastMessage = rooms.map((room) => {
    if (room.roomid === roomid) {
      return {
        ...room,
        lastMessage: message,
        timestamp: new Date().toISOString(),
      };
    }
    return room;
  });
  await updateDoc(userRef, {
    rooms: roomUpdateLastMessage,
  });
};

interface MessagesFooterProps {
  friend: Friend;
}

const MessagesFooter = ({ friend }: MessagesFooterProps) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const db = useFirestore();
  const auth = useAuth();

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const handleSendMessage = async () => {
    if (!message) return;

    try {
      const roomRef = doc(db, "rooms", friend.roomid);
      await updateDoc(roomRef, {
        messages: arrayUnion({
          message,
          timestamp: new Date().toISOString(),
          uid: auth.currentUser!.uid,
        }),
      });

      const currentRoomId = friend.roomid;
      // Actualizar lastMessage
      await updateLastMessage(
        db,
        auth.currentUser!.uid,
        currentRoomId,
        message
      );

      await updateLastMessage(db, friend.uid, currentRoomId, message);

      // Clear the input
      setMessage("");
      setShowEmojiPicker(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className="border-t p-4 flex gap-x-2">
      <div className="relative">
        <Button onClick={() => setShowEmojiPicker((prev) => !prev)}>
          <BsEmojiSmileFill className="text-lg" />
        </Button>
        <div className="absolute bottom-12">
          <EmojiPicker
            open={showEmojiPicker}
            onEmojiClick={onEmojiClick}
          />
        </div>
      </div>
      <Input
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </footer>
  );
};
export default MessagesFooter;
