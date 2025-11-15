import { betterAuth } from "better-auth";
import bcrypt from "bcrypt";
import { nextCookies } from "better-auth/next-js";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "./db";
import sendEmail from "mailprovider";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    autoSignIn: false,
    password: {
      hash: async (password: string) => {
        const hashPassword = await bcrypt.hash(password, 10);
        return hashPassword;
      },
      verify: async (data: { password: string; hash: string }) => {
        const isValid = await bcrypt.compare(data.password, data.hash);
        return isValid;
      },
    },
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        email: user.email,
        subject: "Reset your password",
        displayName: "Swagat Garments",
        htmlContent: `
        description: "Click the link below to reset your password",
        link: url,
        `,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 60 * 60, // 1 hours
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        email: user.email,
        subject: "Verify your email",
        displayName: "Swagat Garments",
        htmlContent: `
        description: "Verify your email to complete your registration",
        link: String(url),
        `,
      });
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
  },
  accounts: {
    accountLinking: {
      enabled: true,
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
});
