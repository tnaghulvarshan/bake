import React from 'react'
import './index.css';
import Jel from "./img/mys.jpg";
import GJ from "./img/gulabj.jpg";
import Laddu from "./img/laddu.jpg";
import Bake from "./img/bake.png";
import Mixed from "./img/mixed.jpg";
import Gift from "./img/gift.jpg";
import Snack from "./img/snACK.jpg";
import Ice from "./img/ice.jpg";
function Home() {
  return (
    <div className='container-fluid home-full'>
<div className=' row g-3 '>
  <div id="carouselExampleFade" className="carousel slide carousel-fade mx-auto  w-100 caro col">
  <div class="carousel-inner">
    <div class="carousel-item active">
      
      <img src={Jel}className="d-block caro-img mx-auto my-3 " alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={GJ} className="d-block caro-img mx-auto my-3" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={Laddu} className="d-block caro-img mx-auto my-3 " alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className='col caro'>
<div id="carouselExampleInterval" className="carousel slide caro-words" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <div className='caro-img  mx-auto my-3 text-center'>
        <h1 className='my-2 text-dark'>Sweets!</h1>
      <p className='p-2'>Welcome to Sweet Indulgence, your go-to destination for authentic Indian sweets! We offer a delightful array of traditional treats, including mouthwatering gulab jamuns, delicious barfis, and tempting laddoos, crafted with the finest ingredients and love.</p>
      <button className=' btn btn-danger'>Order now</button>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className='caro-img  mx-auto my-3 text-center'>
    <h1 className='my-2 text-dark'>Sweets!</h1>
    <p className='p-4'> Whether you’re celebrating a festival, a special occasion, or just indulging your sweet tooth, our sweets are sure to bring joy to every moment. Visit us and experience the rich flavors of India, right here at Sweet Indulgence.</p>
    <button className=' btn btn-danger'>Order now</button>
    </div>
    </div>
    <div className="carousel-item">
    <div className='caro-img  mx-auto my-3 text-center'>
    <h1 className='my-2 text-dark'>Sweets!</h1>
    <p className='p-4'>To experience the authentic flavors of India with our wide range of traditional sweets. Made with the finest ingredients and a touch of love, our sweets bring the essence of Indian festivities to your doorstep.</p>
    <button className=' btn btn-danger'>Order now</button>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  
</div>
</div>
<div className=' brand-content'>
   <div className='brandimg mx-auto my-2'> 
   <img src={Bake} className='w-100'></img>
   </div>
   <h1 className='mx-auto text-center brand-text display-4'>Sweets!</h1>
   <p className='p-2 w-75 mx-auto'> Welcome to our Sweets!, where tradition meets taste! We are dedicated to bringing you the finest selection of authentic Indian sweets, made with love and the highest quality ingredients. From classic favorites like Gulab Jamun and Jalebi to unique regional specialties, our sweets are crafted to perfection. Whether for celebrations, gifts, or everyday indulgence, our treats promise a delightful experience. Join us in savoring the rich flavors and heritage of India.</p>
   <h1 className='mx-auto my-4 p-2 text-center products'>Our Products</h1>pla
    <div className='scroll-prod mx-auto'>
    <div className='prod mx-3  d-flex align-items-center justify-content-evenly flex-column'>
    <img src={Mixed} className=' '></img>
    <h1 > Mixed Sweets</h1>
    <button className='btn btn-danger'>Order Now</button>
    </div>
    <div className='prod mx-3  d-flex align-items-center justify-content-evenly flex-column'>
    <img src={Gift} className=' '></img>
    <h1 > Gift box</h1>
    <button className='btn btn-danger'>Order Now</button>
    </div>
    <div className='prod mx-3  d-flex align-items-center justify-content-evenly flex-column'>
    <img src={Snack} className=''></img>
    <h1 > Snacks</h1>
    <button className='btn btn-danger'>Order Now</button>
    </div>
    <div className='prod mx-3  d-flex align-items-center justify-content-evenly flex-column'>
    <img src={Ice} className=''></img>
    <h1 > Frozen Desserts</h1>
    <button className='btn btn-danger'>Order Now</button>
    </div>
    </div>

</div>
    </div>
  )
}

export default Home