import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Fetcher function
  const fetcher = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }
    return response.json();
  };

  // Mutations
  const sendOtpMutation = useMutation({
    mutationFn: () =>
      fetcher("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }),
    onSuccess: (data) => {
      setMessage(data.message);
      setError("");
      setStep(2); // Move to Step 2
    },
    onError: (err) => {
      setError(err.message);
      setMessage("");
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: () =>
      fetcher("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      }),
    onSuccess: (data) => {
      setMessage(data.message);
      setError("");
      setStep(3); // Move to Step 3
    },
    onError: (err) => {
      setError(err.message);
      setMessage("");
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: () =>
      fetcher("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword, otp }),
      }),
    onSuccess: (data) => {
      setMessage(data.message);
      setError("");
      navigate("/login"); // Navigate to the login page
    },
    onError: (err) => {
      setError(err.message);
      setMessage("");
    },
  });

  // Handlers
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    sendOtpMutation.mutate();
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    verifyOtpMutation.mutate();
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    resetPasswordMutation.mutate();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-[400px]">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          {step === 1 && "Validate Email"}
          {step === 2 && "Enter OTP"}
          {step === 3 && "Reset Password"}
        </h1>

        {message && <p className="text-green-500 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border p-2 rounded-md mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
              disabled={sendOtpMutation.isLoading}
            >
              {sendOtpMutation.isLoading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border p-2 rounded-md mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
              disabled={verifyOtpMutation.isLoading}
            >
              {verifyOtpMutation.isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full border p-2 rounded-md mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md"
              disabled={resetPasswordMutation.isLoading}
            >
              {resetPasswordMutation.isLoading
                ? "Resetting..."
                : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
