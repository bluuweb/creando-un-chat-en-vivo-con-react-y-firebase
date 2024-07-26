import MessagesChat from "@/components/chat/messages-chat";
import MessagesFooter from "@/components/chat/messages-footer";
import MessagesHeader from "@/components/chat/messages-header";

const Messages = () => {
  return (
    <article className="grid grid-rows-[auto_1fr_auto] h-screen">
      <MessagesHeader />
      <MessagesChat />
      <MessagesFooter />
    </article>
  );
};
export default Messages;
