import NextAuth from "next-auth/next";
import githubProvider from "next-auth/providers/github";
export default NextAuth({
  providers: [
    githubProvider({
      clientId: process.env.github_client_id,
      clientSecret: process.env.github_client_secret,
    }),
  ],
  secret: "hMcZX15U3oQ/Tlu6aeKN3pHFjeRo/jv0YI1d7MfG0tw=",
});
