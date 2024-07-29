import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoggedInUser } from '../../auth/authSlice';
//import { selectLoggedInUser } from '../../auth/authSlice';
import { selectUserInfo, updateUserAsync } from '../userSlice';
export default function UserProfile() {
  
  const dispatch = useDispatch();

  //const user = useSelector(selectLoggedInUser);
  const user = useSelector(selectUserInfo);

const handleEdit =()=>{

}
const handleRemove =(e, index)=>{
  
}
  return (
    <div>
      <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t bg-white border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl my-3 font-bold tracking-tight text-gray-900">
        Name: {user.name ? user.name: 'New User'}
          </h1>
          <h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
              Email Address: {user.email}
            </h3>
         <div>
           </div>

          <p className="mt-0.5 text-sm text-gray-500">
          
          </p>
          Your Address: {user.addresses.map((address,index)=>
                    <div
                     
                      className="flex justify-between gap-x-6 px-3 py-5 border-solid border-2  border-gray-200"
                    >
                      <div className="flex min-w-0 gap-x-4">
                     
                        <div className="min-w-0 flex-auto">
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {address.name}
                          </p>
                          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {address.street}
                          </p>
                          <p className="text-sm font-semibold leading-6 text-gray-900">
                            {address.pincode}
                          </p>
                          </div>
                          </div>
                          <div className="hidden  sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-600">
                             Phone: {address.phone}
                            </p>
                            <p className="text-sm leading-6 text-gray-600">
                             City: {address.city}
                            </p>
                          </div>
                       
                          <div className="hidden  sm:flex sm:flex-col sm:items-end">
                        <button onClick={e=>handleEdit(e,index)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                        Edit
                        </button>
                        <button onClick={e=>handleRemove(e,index)}
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                     </div>
                         
                  
                    </div>)}


          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
           
          </div>
        </div>
      </div>


     
    </div>
  );
}