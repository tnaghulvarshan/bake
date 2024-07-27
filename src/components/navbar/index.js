import React from 'react'
import './index.css';
import Bake from "./img/bake.png";
import { Link} from "react-router-dom";
function Navbar() {
  return (
    <div className='container-fluid border navfull d-flex  align-items-center '>
 <nav class="navbar navbar-expand-lg bg-body-tertiary w-75  ">
  <div class="container-fluid ">
    <div className='navbar-brand nav-brand'>
        <img src={Bake} className='w-100'></img>

    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav mx-auto d-flex justify-content-evenly w-100">
      <Link className=' link' to='/'>Home</Link>
      <Link className=' link' to='/product'>Product</Link>
      <Link className=' link' to='/cart'>cart</Link>
     
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar