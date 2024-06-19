import CredentialsProvider from "next-auth/providers/credentials";
import { redirect } from "next/dist/server/api-utils";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          name: "email",
          type: "text",
        },
        password: { name: "password", type: "text" },
      },
      async authorize(credentials, req) {
        const url: string = "http://localhost:8880/api/signIn-user";
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        console.log("reading session: ", user?.data);

        if (user) {
          return {
            ...user,
            name: user?.data?.Fname,
            email: user?.data?.email,
            id: user?.data?._id,
          };
        }
        return null;
      },
    }),
  ],
  secret: "llkoiuytgbg",

  callbacks: {
    async redirect() {
      return "/dashboard";
    },
  },
};
