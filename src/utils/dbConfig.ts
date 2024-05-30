import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "@/utils/schema";

const postgresURL = process.env.NEXT_PUBLIC_DATABASE_POSTGRES_URL;
if (!postgresURL) {
  throw new Error("Missing the variable NEXT_PUBLIC_DATABASE_POSTGRES_URL");
}

const client = new Client({
  connectionString: postgresURL,
});

await client.connect();
const db = drizzle(client, { schema });
