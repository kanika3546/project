import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoggedInUserOrderAsync, selectUserOrders ,selectUserInfo} from '../userSlice';
import { selectLoggedInUser } from '../../auth/authSlice';

export default function UserOrders() {
  const dispatch = useDispatch();

 const user = useSelector(selectUserInfo);

  const orders = useSelector(selectUserOrders);


  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(user.id));
  }, []);

  return (
    <div>
      {orders.map((order) => (
         <div>

<div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t bg-white border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-3 font-bold tracking-tight text-gray-900">
          Order #{order.id}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
              Order Status : {order.status}
            </h3>
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {order.items.map((item) => (
                <li key={item[0].id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                       src={item[0].thumbnail}
                       alt={item[0].title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                        <a href={item[0].href}>{item[0].title}</a>
                        </h3>
                        <p className="ml-4">${item[0].price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item[0].brand}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <label
                          htmlFor="quantity"
                          className="inline mr-4 text-sm font-medium leading-6 text-gray-900"
                        >
                          Qty:{item.quantity}
                        </label>
                       
                      </div>

                      <div className="flex">

                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between my-2 text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$ {order.totalAmount}</p>
            </div>
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Total Items in Cart</p>
              <p>{order.totalItems} items</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
           Shipping Address:
          </p>
      
                    <div
                     
                      className="flex justify-between gap-x-6 px-3 py-5 border-solid border-2  border-gray-200"
                    >
                      <div className="flex min-w-0 gap-x-4">
                     
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {order.selectedAddress.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {order.selectedAddress.street}
                          </p>
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {order.selectedAddress.pincode}
                          </p>
                          </div>
                          </div>
                          <div className="hidden  sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-600">
                             Phone: {order.selectedAddress.phone}
                            </p>
                            <p className="text-sm leading-6 text-gray-600">
                             City: {order.selectedAddress.city}
                            </p>
                          </div>
                  
                    </div>


          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
           
          </div>
        </div>
      </div>


        </div>

      ))}
    </div>
  );
}