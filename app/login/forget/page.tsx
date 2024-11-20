import React from "react";
import Link from "next/link";
import "@/app/globals.css";

export default function Forget() {
  const emailPasswordReset = {
    opacity: 0.8,
    backgroundColor: "#1D1B1B",
    borderRadius: "15px",
    padding: "25px",
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/login_assets/login_background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div style={emailPasswordReset}>
        <h1 className="text-3xl">AH, What a bummer.</h1>
        <p className="mt-5 text-lg">
          No worries, we'll send you an instruction on how to reset the
          password.
        </p>
        <p className="mt-5 text-lg">Email</p>
        <input
          type="text"
          style={{ width: "513px" }}
          className="w-full p-2 border rounded bg-gray-800 text-white block text-lg"
        />
        <div className="flex justify-center gap-4 mt-4">
        <button
          type="submit"
          className="p-2 bg-red-600 text-white rounded"
          style={{ height: "42px", width: "168px", borderRadius: "45px" }}
        >
          RESET PASSWORD
        </button></div>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/login">
            <button
              type="button"
            >
            BACK TO LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
