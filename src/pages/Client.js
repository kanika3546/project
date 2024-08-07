import React from 'react';
import axios from 'axios';
import { Link, Navigate, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import {resetOrder} from "../features/order/orderSlice";

const Client = () => {
  const navigate = useNavigate();
  const params = useParams() 
  const dispatch = useDispatch();

  useEffect(()=>{
   // reset cart
   dispatch(resetCartAsync())
   // reset currentOrder
   dispatch(resetOrder())
  },[dispatch])
 
  const data = {
    name: 'kanika',
    amount: 1,
    number: '9999999999',
    MUID: "MUID" + Date.now(),
    transactionId: 'T' + Date.now(),
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.post('http://localhost:8080/orde', { ...data });
      console.log(res);

      if (res.data && res.data.data && res.data.data.instrumentResponse.redirectInfo.url) {
        window.location.href = res.data.data.instrumentResponse.redirectInfo.url;
      }
    } catch (error) {
      console.error(error);
    }
   
  };

  return (
    <form onSubmit={handlePayment}>
      <div className='col-12 center'>
        <button className='w-100' type="submit">Pay Now</button>
      </div>
    </form>
  );
};

export default Client;







