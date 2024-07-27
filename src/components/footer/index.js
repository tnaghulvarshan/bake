import React from 'react'
import './index.css';

function Footer() {
  return (
    <div className='footer container-fluid my-4 '>
        <div className='row g-4'>
        <div className='col  p-4'>
            <div className='foot-cont  d-flex align-items-center justify-content-evenly flex-column'>
            <h3 className='opacity-100 text-center'>Customer Service</h3>
            <ul className=' p-2 text-center '>
                <li className='my-4  footer-li'>Contact us</li>
                <li className='my-4  footer-li'>Take Order</li>
                <li className='my-4  footer-li'>Return Policy</li>
               
            </ul>
            </div>
            </div>
        <div className='col  p-4'>
        <div className='foot-cont  d-flex align-items-center justify-content-evenly flex-column'>
            <h3 className='opacity-100 '>Products</h3>
            <ul className=' p-2 text-center '>
                <li className='my-4  footer-li'>All sweets</li>
                <li className='my-4  footer-li'>Special Offer</li>
                <li className='my-4  footer-li'>Limited Sweets</li>
               
            </ul>
            </div>
        </div>
        <div className='col  p-4'>
        <div className='foot-cont  d-flex align-items-center justify-content-evenly flex-column'>
            <h3 className='opacity-100 '>Contact Information</h3>
            <ul className=' p-2 text-center '>
                <li className='my-4  footer-li'><b>Address: </b> <p>No:123,HTC Road,Chennai-600028.</p></li>
                <li className='my-4  footer-li'><b>Phone No: </b> <p>12345 67890</p></li>
                <li className='my-4  footer-li'><b>Email: </b> <p>Sweets@gmail.com</p></li>
               
            </ul>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Footer