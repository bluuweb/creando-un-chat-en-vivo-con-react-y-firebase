interface FriendItemProps {
  displayName: string;
  photoURL: string;
  lastMessage: string;
}

const FriendItem = ({
  displayName,
  photoURL,
  lastMessage,
}: FriendItemProps) => {
  return (
    <article className="flex items-center gap-x-3 py-2 px-4 border-b hover:bg-gray-100 cursor-pointer">
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
