'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function loadWallet() {
      if (window.tronWeb && window.tronWeb.ready) {
        const address = window.tronWeb.defaultAddress.base58;
        setWalletAddress(address);

        const contract = await window.tronWeb.contract().at('TA4SRuaiPgjhaJosgxjujS2myspLdoxcHx');
        const result = await contract.balanceOf(address).call();
        const value = parseInt(result._hex || result, 16) / 1e6;
        setBalance(value);
      }
    }

    loadWallet();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-3xl font-bold mb-4">USDXT DApp</h1>
        {walletAddress ? (
          <div className="text-center">
            <p className="mb-2">Wallet: {walletAddress}</p>
            <p className="mb-2">USDXT Balance: {balance}</p>
            <p className="text-green-400 font-semibold">Estimated Value: ${balance?.toFixed(2)} USD</p>
          </div>
        ) : (
          <p className="text-yellow-400">Connect your Tron wallet...</p>
        )}
      </motion.div>
    </main>
  );
}
