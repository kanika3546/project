

import React, { useState } from 'react';
import { JsonRpcProvider } from 'ethers';

export const requestAccount = async () => {
  console.log('Requesting account...');
  if (window.ethereum) {
    console.log('detected');
    alert('Meta Mask  detected');
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    } catch (error) {
      console.log('Error connecting...');
    }
  } else {
    alert('Meta Mask not detected');
  }
};

export const sendTransaction = async (toAddress, amount) => {
    if (window.ethereum) {
      try {
        // Request account access
        const account = await requestAccount();
  
        // Create a provider
        const provider = new JsonRpcProvider.providers.Web3Provider(window.ethereum);
  
        // Get the signer
        const signer = provider.getSigner();
  
        // Convert amount to wei
        const valueInWei = JsonRpcProvider.utils.parseEther(amount.toString());
  
        // Create transaction parameters
        const tx = {
          to: toAddress, // Address to send ETH
          value: valueInWei, // Amount in wei
          gasLimit: 21000, // Gas limit (standard for ETH transfer)
        };
  
        // Send the transaction
        const transactionResponse = await signer.sendTransaction(tx);
        console.log('Transaction Response:', transactionResponse);
  
        // Wait for transaction to be mined
        const receipt = await transactionResponse.wait();
        console.log('Transaction Receipt:', receipt);
  
        return receipt;
      } catch (error) {
        console.error('Transaction Error:', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  export default function Metamask () {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const address = await requestAccount();
      setWalletAddress(address);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={connectWallet}>Request Account</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
};

//export default requestAccount; // Export the function as default