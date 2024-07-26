import { useEffect, useRef } from "react";
import Message from "./message";

const MessagesChat = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <main
      ref={containerRef}
      className="bg-indigo-100 p-4 space-y-2 custom-scrollbar"
    >
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
    </main>
  );
};
export default MessagesChat;
