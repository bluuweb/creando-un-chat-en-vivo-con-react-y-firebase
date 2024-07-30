import { useLoadingStore } from "@/store/loading-store";
import { useSigninCheck } from "reactfire";
import AuthLayout from "./auth-layout";
import ChatLayout from "./chat-layout";

const RootLayout = () => {
  const { status, data: signInCheckResult } = useSigninCheck();
  const { loading } = useLoadingStore();

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <div className="">
      {signInCheckResult.signedIn && !loading ? <ChatLayout /> : <AuthLayout />}
    </div>
  );
};
export default RootLayout;
