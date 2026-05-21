import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { authClient } from "@/lib/auth-client";
import { anonymous } from "better-auth/plugins"
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);


const db = client.db("some-bokks");

export const auth = betterAuth({
   
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
   emailAndPassword: { 
    enabled: true, 
    requireEmailVerification:false
   },
   socialProviders: {
    google: {
        clientId: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_SECRET
    }
  },
  account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["google", "github", "email-password"]
      
		}
	},
    session : {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      //max 7days
      maxAge: 7 * 24 * 60 * 60
    }
  },
  plugins: [
    jwt()
  ]
});
