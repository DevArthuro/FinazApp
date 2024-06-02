import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const postgresURL = process.env.NEXT_PUBLIC_DATABASE_POSTGRES_URL!;
alert(JSON.stringify(postgresURL));
if (!postgresURL) {
  throw new Error("Missing the variable NEXT_PUBLIC_DATABASE_POSTGRES_URL");
}

const client = postgres(postgresURL!);

const db = drizzle(client);

export default db;
