import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple";
import Email from "next-auth/providers/email";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { accounts, sessions, users, verificationTokens } from "@/db/schema";

function initAuth() {
  return NextAuth({
    secret: process.env.NEXTAUTH_SECRET || "development-secret-change-in-production",
    adapter: DrizzleAdapter(db, {
      usersTable: users,
      accountsTable: accounts,
      sessionsTable: sessions,
      verificationTokensTable: verificationTokens
    }),
    providers: [
      Google({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
      }),
      Apple({
        clientId: process.env.APPLE_CLIENT_ID ?? "",
        clientSecret: process.env.APPLE_CLIENT_SECRET ?? ""
      }),
      Email({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      })
    ],
    session: {
      strategy: "jwt"
    },
    pages: {
      signIn: "/auth/sign-in",
      verifyRequest: "/auth/magic-link"
    }
  });
}

let _auth: ReturnType<typeof initAuth> | null = null;
function getAuth() {
  if (!_auth) _auth = initAuth();
  return _auth;
}

export const handlers = {
  GET: (...args: any[]) => (getAuth().handlers as any).GET(...args),
  POST: (...args: any[]) => (getAuth().handlers as any).POST(...args)
};
export const auth = (...args: any[]) => (getAuth() as any).auth(...args);
export const signIn = (...args: any[]) => (getAuth() as any).signIn(...args);
export const signOut = (...args: any[]) => (getAuth() as any).signOut(...args);
