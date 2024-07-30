import { registerFormSchema as formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLoadingStore } from "@/store/loading-store";
import {
  AuthError,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAuth, useStorage } from "reactfire";

const Register = () => {
  const auth = useAuth();
  const storage = useStorage();
  const { loading, setLoading } = useLoadingStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
      photoURL: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("User created");

      // 1. Guardar avatar en storage
      const storageRef = ref(storage, "avatars/" + user.uid + ".jpg");
      await uploadBytes(storageRef, values.photoURL);

      // 2. Recuperar la URL del avatar
      const photoURL = await getDownloadURL(storageRef);

      // 3. Actualizar el perfil del usuario con la URL del avatar
      await updateProfile(user, {
        displayName: values.displayName,
        photoURL,
      });

      console.log("Profile updated");
    } catch (error) {
      console.log(error);

      const firebaseError = error as AuthError;

      if (firebaseError.code === "auth/email-already-in-use") {
        form.setError("email", {
          type: "manual",
          message: "Email already in use",
        });
        return;
      }

      console.log("Error creating user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-5">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Fill in the form below to</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="user@domain.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="******"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="******"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="photoURL"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Avatar</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        placeholder="Picture"
                        type="file"
                        accept="image/*, application/pdf"
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={loading}
              >
                Register
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
export default Register;
