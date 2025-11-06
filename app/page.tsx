"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Our Homepage</h1>

      <p className="text-lg">
        Current Time (Client-Side Rendered):
      </p>

      <p className="text-2xl font-semibold text-blue-600">
        {time}
      </p>
    </div>
  );
}
