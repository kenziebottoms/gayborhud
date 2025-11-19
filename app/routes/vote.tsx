import { useState } from "react";
import type { Route } from "./+types/vote";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Vote" },
    { name: "description", content: "Vote here!" },
  ];
}

export default function Vote() {
  const [displayName, setDisplayName] = useState<string>('')
  return <div>
    <h1 className="text-4xl">Vote</h1>
    <label className="italic text-gray">
      Voting as
      <input
        type="text"
        className="bg-white text-black not-italic p-2 m-2 rounded-sm"
        value={displayName}
        onChange={e => setDisplayName(e.target.value)}
      />
    </label>
  </div>;
}
