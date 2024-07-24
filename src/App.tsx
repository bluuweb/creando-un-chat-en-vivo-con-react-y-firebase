import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  AuthProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
} from "reactfire";
import RootLayout from "./layouts/root-layout";

const App = () => {
  const app = useFirebaseApp();
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  return (
    <FirestoreProvider sdk={db}>
      <AuthProvider sdk={auth}>
        <StorageProvider sdk={storage}>
          <RootLayout />
        </StorageProvider>
      </AuthProvider>
    </FirestoreProvider>
  );
};
export default App;
