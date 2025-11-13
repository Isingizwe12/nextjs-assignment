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
    <div className="space-y-4 bg-green-100 h-screen text-center pt-8">
    <div className="">
      <h1 className="text-3xl font-bold">Welcome </h1>
    
      <p className="text-lg">
        Current Time
      </p>

      <p className="text-2xl font-semibold text-blue-600">
        {time}
      </p>
      </div>
    </div>
  );
}
