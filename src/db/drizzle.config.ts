import { Config } from "drizzle-kit";

const postgresURL = process.env.NEXT_PUBLIC_DATABASE_POSTGRES_URL;
if (!postgresURL) {
  throw new Error("Missing the variable NEXT_PUBLIC_DATABASE_POSTGRES_URL");
}

export default {
  schema: "./src/schemas",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: postgresURL,
  },
} satisfies Config;
