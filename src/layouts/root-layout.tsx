import AuthLayout from "./auth-layout";
import ChatLayout from "./chat-layout";

const RootLayout = () => {
  const user = true;

  return <div className="">{user ? <ChatLayout /> : <AuthLayout />}</div>;
};
export default RootLayout;
