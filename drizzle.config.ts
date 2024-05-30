import { defineConfig } from "drizzle-kit";

const postgresURL = process.env.NEXT_PUBLIC_DATABASE_POSTGRES_URL;
if (!postgresURL) {
  throw new Error("Missing the variable NEXT_PUBLIC_DATABASE_POSTGRES_URL");
}

export default defineConfig({
  schema: "./src/utils/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: postgresURL,
  },
  verbose: true,
  strict: true,
});
