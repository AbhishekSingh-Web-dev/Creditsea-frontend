"use client";

import { logEvent } from "@/utils/eventTracker";
import { useEffect } from "react";
import Link from "next/link";

export default function Page5() {
  useEffect(() => {
    logEvent("pageVisit", "page5");
    const enterTime = Date.now();
    return () => {
      const duration = (Date.now() - enterTime) / 1000;
      logEvent("timeOnPage", "page5", { seconds: duration });
    };
  }, []);

  const handleClick = () => {
    logEvent("buttonClick", "page5", { button: "click  button" });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome to Page5</h1>
      <button onClick={handleClick} className="mt-5 px-4 py-2 bg-purple-600">
        click Me
      </button>
      <br />
      <Link href="/" className="mt-5 px-4 py-2 bg-purple-600">
        Go to Home Page
      </Link>
    </div>
  );
}
