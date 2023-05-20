import { eq } from "drizzle-orm";
import db from "./db.server";
import { users } from "./schema";

const sampleUsers = [
  {
    name: "Shane Walker",
    email: "shane@swalker.dev"
  },
  {
    name: "Avtie",
    email: "happy@swalker.dev"
  }
];
export const seed = async () => {
  const user = await db.select().from(users).where(eq(users.name, "Shane Walker")).get();
  if (user) {
    console.log("Users already seeded");
    return;
  }
  console.log("User not found, Seeding!");
  db.insert(users).values(sampleUsers).returning().get();
};
