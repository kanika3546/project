
import React, { useState } from "react";
import BidModal from "./BitModal";
import {requestAccount, sendTransaction}  from "./Metamask";
import Metamask from "./Metamask";
function NFTCard({ img, title, price, sale }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState(price);
  const [currentPrice, setCurrentPrice] = useState(price); // State for current price
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handlePayClick = async () => {
    try {
      const account = await requestAccount(); // Request MetaMask account
      if (account) {
        alert(`MetaMask connected! Your wallet address is: ${account}`);
        await handlePayment(account); // Proceed with payment only if account is connected
      } else {
        alert("Please connect MetaMask to proceed with the payment.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  const handlePayment = async () => {
    try {
      const receipt = await sendTransaction( currentPrice);
      if (receipt) {
        alert("Payment successful!");
        // Update the state or perform any other actions upon success
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  const handleBidSubmit = () => {
    // Update the price only if the bidAmount is greater than the currentPrice
    if (bidAmount > currentPrice) {
      setCurrentPrice(bidAmount); // Update the current price
      console.log("Bid accepted:", bidAmount);

      // Display a simple alert
      alert("Bid accepted! New price is " + bidAmount + " ETH");

      // Optionally, reset the form or close the modal
      toggleModal();
    } else {
      // Display an alert if the bid amount is not higher
      alert("Bid amount must be higher than the current price.");

      // Optionally, log the error to the console
      console.log("Bid amount must be higher than the current price.");
    }
  };

  return (
    <>
      <div className="flex group flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5 relative">
        {/* Image & Counter */}
        <div className="flex flex-col items-start relative">
          <img src={img} alt="NFT" className="object-cover" />
        </div>
        {/* Content */}
        <div className="px-6 flex flex-col text-black space-y-3">
          {/* Title */}
          <h1>{title}</h1>
          {/* Price & Like */}
          <div className="flex justify-between">
            {/* Price */}
            <div className="flex space-x-2 text-indigo-600 items-center">
              {/* <FaEthereum size={18} /> */}
              <p className="text-sm font-semibold">{currentPrice} ETH</p> {/* Use currentPrice */}
            </div>
            {/* Like */}
            <div className="flex space-x-2 items-center">
              <button className="flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl"  onClick={handlePayClick}>
                Pay
              </button>
            </div>
          </div>
        </div>
        {/* Hover */}
        <div className="absolute hidden top-1/4 left-1/3 md:left-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-1000">
          <button
            className="text-sm px-6 py-2 bg-indigo-600 rounded-md hover:bg-indigo-700 duration-200 ease-in-out"
            onClick={toggleModal}
          >
            Place bid
          </button>
        </div>
      </div>
      {/* Modal */}
      <BidModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onBidSubmit={handleBidSubmit}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        bidAmount={bidAmount}
        setBidAmount={setBidAmount}
      />
    </>
  );
}

export default NFTCard;
