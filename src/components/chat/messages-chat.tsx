import { Message as MessageInterface } from "@/schemas/firestore-schema";
import { Friend } from "@/store/chat-store";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useAuth, useFirestore } from "reactfire";
import { format } from "timeago.js";
import Message from "./message";

interface MessagesChatProps {
  friend: Friend;
}

const MessagesChat = ({ friend }: MessagesChatProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const db = useFirestore();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const roomRef = doc(db, "rooms", friend.roomid);
    const unSubscribe = onSnapshot(roomRef, (document) => {
      setMessages(document.data()?.messages);
    });

    return () => unSubscribe();

    // eslint-disable-next-line
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-indigo-100 p-4 space-y-2 custom-scrollbar"
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.message}
          time={format(message.timestamp)}
          photoURL={
            message.uid === currentUser?.uid
              ? currentUser?.photoURL
              : friend.photoURL
          }
          isCurrentUser={message.uid === currentUser?.uid}
        />
      ))}

      {/* <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aut modi non a dolorem tempora hic dolorum, dolores perferendis
            incidunt magnam vitae labore sint sunt consequuntur ad culpa,
            voluptatum eligendi."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/12.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aut modi non a dolorem tempora hic dolorum, dolores perferendis
            incidunt magnam vitae labore sint sunt consequuntur ad culpa,
            voluptatum eligendi."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/12.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aut modi non a dolorem tempora hic dolorum, dolores perferendis
            incidunt magnam vitae labore sint sunt consequuntur ad culpa,
            voluptatum eligendi."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/12.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aut modi non a dolorem tempora hic dolorum, dolores perferendis
            incidunt magnam vitae labore sint sunt consequuntur ad culpa,
            voluptatum eligendi."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/12.jpg"
        isCurrentUser={true}
      />
      <Message
        message="Hello, how are you?"
        time="10:00 AM"
        photoURL="https://randomuser.me/api/portraits/women/19.jpg"
        isCurrentUser={false}
      />
      <Message
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aut modi non a dolorem tempora hic dolorum, dolores perferendis
            incidunt magnam vitae labore sint sunt consequuntur ad culpa,
            voluptatum eligendi."
        time="right now"
        photoURL="https://randomuser.me/api/portraits/women/12.jpg"
        isCurrentUser={true}
      /> */}
    </main>
  );
};
export default MessagesChat;
