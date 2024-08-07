import { useChatStore } from "@/store/chat-store";

interface FriendItemProps {
  uid: string;
  displayName: string;
  photoURL: string;
  lastMessage: string;
  roomid: string;
}

const FriendItem = ({
  displayName,
  photoURL,
  lastMessage,
  roomid,
  uid,
}: FriendItemProps) => {
  const { setFriend, resetFriend } = useChatStore();

  return (
    <article
      className="flex items-center gap-x-3 py-2 px-4 border-b hover:bg-gray-100 cursor-pointer"
      onClick={() => {
        resetFriend();
        setFriend({ displayName, photoURL, lastMessage, roomid, uid });
      }}
    >
      <img
        src={photoURL}
        alt=""
        className="w-16 h-16 rounded-md"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg text-gray-800">{displayName}</h3>
        <p className="text-xs text-gray-500 truncate">{lastMessage}</p>
      </div>
    </article>
  );
};
export default FriendItem;
