import { json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/db/db.server";
import { users } from "~/db/schema";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const result = await db.select().from(users).all();
  return json({ users: result });
};

export default function Index() {
  const { users } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 6
        }}
      >
        {users?.map((user) => {
          return (
            <li
              style={{
                border: "1px solid purple",
                borderRadius: 8,
                padding: 4,
                paddingLeft: 8
              }}
              key={user.id}
            >
              <h2>{user.name}</h2>
              <h4>{user.email}</h4>
            </li>
          );
        })}
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
