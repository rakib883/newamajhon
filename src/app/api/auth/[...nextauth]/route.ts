import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

 const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_PASSWORD!,
    }),
  ],
  // Add other configuration options here
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
