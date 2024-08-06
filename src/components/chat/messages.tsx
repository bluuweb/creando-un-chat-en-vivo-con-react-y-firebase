import MessagesChat from "@/components/chat/messages-chat";
import MessagesFooter from "@/components/chat/messages-footer";
import MessagesHeader from "@/components/chat/messages-header";
import { useChatStore } from "@/store/chat-store";

const Messages = () => {
  const { friend } = useChatStore();

  if (!friend)
    return (
      <div className="grid h-screen place-items-center">
        <p className="text-gray-500">Select a friend to start chatting</p>
      </div>
    );

  return (
    <article className="grid grid-rows-[auto_1fr_auto] h-screen">
      <MessagesHeader />
      <MessagesChat friend={friend} />
      <MessagesFooter friend={friend} />
    </article>
  );
};
export default Messages;
