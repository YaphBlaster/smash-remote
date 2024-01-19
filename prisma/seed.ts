import postgres from "postgres";

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("Couldn't find db url");
}
const sql = postgres(dbUrl);

async function main() {
  await sql`
    drop trigger on_auth_user_created on auth.users;
  `;

  console.log("Finished adding triggers and functions for profile handling.");
  process.exit();
}

main();
