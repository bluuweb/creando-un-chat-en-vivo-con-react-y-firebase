import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";

const MessagesFooter = () => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  const handleSendMessage = async () => {
    if (!message) return;

    // Send message to the server
    console.log(message);

    // Clear the input
    setMessage("");
    setShowEmojiPicker(false);
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
