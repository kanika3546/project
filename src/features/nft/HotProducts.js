import React from 'react';
import NFTCardList from './NFTCardList';


function HotProducts() {
  return (
    <>
      <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
          <div className='flex flex-col items-center space-y-8'>
            {/* Content */}
            <div
              className='flex flex-col items-center space-y-4 '
            >
              <h1
               
                className='text-2xl md:text-3xl font-medium text-black'
              >
                Explore Hot Products
              </h1>
           
            </div>
            {/* Collection of NFTs */}
            <div
              
              className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'
            >
              {/* Card 1 */}
              <NFTCardList />
            </div>
         
          </div>
        </div>
      </section>
    </>
  )
}

export default HotProducts;
