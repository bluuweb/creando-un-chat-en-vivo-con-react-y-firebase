import { UserRoom } from "@/schemas/firestore-schema";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth, useFirestore } from "reactfire";
import FriendItem from "./friend-item";
import FriendSearch from "./friend-search";

interface Friend {
  uid: string;
  displayName: string;
  photoURL: string;
  lastMessage: string;
}

const Friends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);

  const db = useFirestore();
  const auth = useAuth();

  // useEffect(() => {
  //   const getFriends = async () => {
  //     const res = await fetch("https://randomuser.me/api/?results=15&nat=mx");
  //     const { results } = await res.json();

  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     const data = results.map((user: any) => ({
  //       uid: user.login.uuid,
  //       displayName: user.name.first,
  //       photoURL: user.picture.large,
  //       lastMessage: "Hi, i am " + user.name.first,
  //     }));

  //     setFriends(data);
  //   };

  //   getFriends();
  // }, []);

  useEffect(() => {
    const userRef = doc(db, "users", auth.currentUser!.uid);
    const unsubcribe = onSnapshot(userRef, (document) => {
      // console.log("Current data: ", doc.data()?.rooms);

      const friendPromises = document.data()?.rooms.map((room: UserRoom) => {
        const friendRef = doc(db, "users", room.friendId);
        return getDoc(friendRef);
      });

      Promise.all(friendPromises).then((friends) => {
        const data = friends.map((friend) => {
          const data = friend.data();
          return {
            uid: data.uid,
            displayName: data.displayName,
            photoURL: data.photoURL,
            lastMessage: data.rooms[0].lastMessage,
          };
        });

        setFriends(data);
      });
    });

    return unsubcribe;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] h-screen border-r">
      <section className="border-b p-4">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Chats</h2>
        <FriendSearch />
      </section>
      <section className="custom-scrollbar">
        {friends.map((friend) => (
          <FriendItem
            key={friend.uid}
            // props spread operator (spreading all the properties of the friend object)
            {...friend}
          />
        ))}
      </section>
    </div>
  );
};
export default Friends;
