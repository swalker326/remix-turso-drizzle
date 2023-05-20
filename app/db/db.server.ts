import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import { createClient } from "@libsql/client";
import { seed } from "./seed.server";

const client = createClient({
  url: "file:local.db",
  authToken:
    "such_auth_wow_much_secure_very_safe"
});

const db = drizzle(client);
migrate(db, { migrationsFolder: "./migrations" })
.then(() => {
  seed();
});
export default db;
