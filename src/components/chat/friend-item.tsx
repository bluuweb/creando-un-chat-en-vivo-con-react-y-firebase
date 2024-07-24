const FriendItem = () => {
  return (
    <article className="flex items-center gap-x-3 py-2 px-4 border-b hover:bg-gray-100 cursor-pointer">
      <img
        src="https://randomuser.me/api/portraits/women/5.jpg"
        alt=""
        className="w-16 h-16 rounded-md"
      />
      <div>
        <h3 className="font-semibold text-lg text-gray-800">Anusha</h3>
        <p className="text-xs text-gray-500">Lorem, ipsum dolor.</p>
      </div>
    </article>
  );
};
export default FriendItem;
