import { Button } from "@/components/ui/button";

const MessagesHeader = () => {
  return (
    <header className="border-b p-4 flex items-center gap-x-4">
      <img
        src="https://randomuser.me/api/portraits/women/19.jpg"
        alt=""
        className="rounded-md size-20"
      />
      <div className="">
        <p className="text-lg font-semibold text-gray-700">Marcela</p>
        <p className="text-xs text-gray-500">Active</p>
      </div>
      <div className="ml-auto">
        <Button>Close chat</Button>
      </div>
    </header>
  );
};
export default MessagesHeader;
