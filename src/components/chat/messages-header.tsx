import { Button } from "@/components/ui/button";
import { useChatStore } from "@/store/chat-store";

const MessagesHeader = () => {
  const { resetFriend, friend } = useChatStore();

  return (
    <header className="border-b p-4 flex items-center gap-x-4">
      <img
        src={friend?.photoURL}
        alt=""
        className="rounded-md size-20"
      />
      <div className="">
        <p className="text-lg font-semibold text-gray-700">
          {friend?.displayName}
        </p>
        <p className="text-xs text-gray-500">Active</p>
      </div>
      <div className="ml-auto">
        <Button onClick={resetFriend}>Close chat</Button>
      </div>
    </header>
  );
};
export default MessagesHeader;
