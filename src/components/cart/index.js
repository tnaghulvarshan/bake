import React from 'react'
import './index.css';

function Cart({cart , deleteItem ,countIncrease,countDecrease}) {

  return (
    <div className='container-fluid cart-full'>
      <h1 className='text-center for-cart'> Cart Items</h1>
      <div className=' mx-auto rounded  my-4 w-75 '>
      {cart.length > 0 ?(
        cart.map((data, index) => (
        <div className='row w-100 my-2 ' key={index}>
          <div className='d-flex p-3  cart-card border bg-light  col-12 col-md-6  ' >
            <img src={data.img} className='mx-auto'></img> </div>
            <div className='cart-des border col-12 col-md-6 d-flex justify-content-evenly flex-column '>
              <h1 className='text-center my-4 '>{data.name}</h1>
              <div className='d-flex w-100 my-3 justify-content-center'> 
                <button className='btn btn-danger' onClick={()=>countDecrease(index)}>-</button>
                    <h4 className='mx-4 '>{data.count}</h4>
                <button className='btn btn-success' onClick={()=>countIncrease(index)}>+</button>
                 </div>
              <button className='btn btn-danger w-50 mx-auto' onClick={()=>deleteItem(index)}>Delete</button>
              </div>
            
         
          </div>
        ))):(
          <div className='empty-cart d-flex mx-auto text-center w-75 my-4 rounded'><h1 className='text-center  display-4 w-100'>Empty Cart</h1></div>
        )}
      </div>
    </div>
  )
}

export default Cart