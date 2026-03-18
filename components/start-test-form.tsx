"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function StartTestForm() {
  const router = useRouter();
  const [url, setUrl] = useState("");

  const handleStart = () => {
    if (!url.trim()) return;

    const finalUrl = url.startsWith("http://") || url.startsWith("https://")
      ? url
      : `https://${url}`;

    router.push(`/runs?url=${encodeURIComponent(finalUrl)}`);
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="website-url" className="mb-2 block text-sm font-medium">
          Website URL
        </label>
        <input
          id="website-url"
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-black/30 dark:border-white/10 dark:bg-neutral-950 dark:focus:border-white/30"
        />
      </div>

      <button
        type="button"
        onClick={handleStart}
        className="inline-flex items-center rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
      >
        Start Test
      </button>
    </div>
  );
}