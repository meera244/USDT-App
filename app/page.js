"use client";
import React, { useState } from "react";

export default function Page() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = () => {
    if (!recipient || !amount) {
      setStatus("Please enter all fields");
      return;
    }
    setStatus("✅ Transaction Sent (Mocked)");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#111", color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <img src="/usdt.png" alt="USDXT" width="80" />
      <h2 style={{ fontSize: "24px", marginBottom: "1rem" }}>Send USDXT</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%", maxWidth: "300px", borderRadius: "8px" }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%", maxWidth: "300px", borderRadius: "8px" }}
      />
      <button onClick={handleSend} style={{ backgroundColor: "#facc15", color: "#000", padding: "0.5rem 1rem", borderRadius: "8px" }}>
        Send
      </button>
      {status && <p style={{ marginTop: "1rem", color: "lightgreen" }}>{status}</p>}
    </div>
  );
}
