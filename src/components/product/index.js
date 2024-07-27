import React from 'react'
import './index.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Product({addProduct}) {
  const sweet=[{
    name:"Gulab jamun",
    count: 1,
    img:'/img/gulabj.jpg',
    desc:" Soft, sweet, deep-fried milk solids soaked in aromatic sugar syrup, an Indian dessert delight."
  },
  {
    name:"laddu",
    count: 1,
    img:'/img/laddu.jpg',
    desc:"Sweet Indian dessert made from flour, ghee, and sugar, often flavored with cardamom and nuts."
  },
  {
    name:"Jilebi",
    count: 1,
    img:'/img/jilebi.jpg',
    desc:"lorem asdasdas dasdasfv cv as dfd dqwe2as"
  },
{
    name:"mysore pak",
    count: 1,
    img:'/img/mys.jpg',
    desc:"Mysore Pak is a rich, traditional Indian sweet made from gram flour, ghee, and sugar."
  },
{
    name:"kaju Katli",
    count: 1,
    img:'/img/kaju.jpg',
    desc:"A delectable Indian sweet made from cashew nuts, sugar, and ghee."
  },
  {
    name:"Rasgulla",
    count: 1,
    img:'/img/rasgulla.jpg',
    desc:" spongy, syrupy Indian dessert made from chhena, flavored with cardamom and rose water."
  }
];
  const snacks=[{
    name:"Murruku",
    count: 1,
    img:'/img/murruku.jpg',
    desc:" Soft, sweet, deep-fried milk solids soaked in aromatic sugar syrup, an Indian dessert delight."
  },
  {
    name:"Mixture",
    count: 1,
    img:'/img/mixture.jpg',
    desc:"Sweet Indian dessert made from flour, ghee, and sugar, often flavored with cardamom and nuts."
  },
  {
    name:"Ribbon Chips",
    count: 1,
    img:'/img/ribbon.jpg',
    desc:"lorem asdasdas dasdasfv cv as dfd dqwe2as"
  },
{
    name:"Sev",
    count: 1,
    img:'/img/sev.jpg',
    desc:"Mysore Pak is a rich, traditional Indian sweet made from gram flour, ghee, and sugar."
  },
{
    name:"Rose Cookie",
    count: 1,
    img:'/img/rose.jpg',
    desc:"A delectable Indian sweet made from cashew nuts, sugar, and ghee."
  },
   { name:"MoongDal",
    count: 1,
    img:'/img/moong.jpg',
    desc:"A delectable Indian sweet made from cashew nuts, sugar, and ghee."
  },
  {
    name:"Samosa",
    count: 1,
    img:'/img/Samosa.jpg',
    desc:" spongy, syrupy Indian dessert made from chhena, flavored with cardamom and rose water."
  }
];
  const others=[{
    name:"Icecream",
    count: 1,
    img:'/img/icecream.jpg',
    desc:" Soft, sweet, deep-fried milk solids soaked in aromatic sugar syrup, an Indian dessert delight."
  },
  {
    name:"Chat Items",
    count: 1,
    img:'/img/chAT.jpg',
    desc:"Sweet Indian dessert made from flour, ghee, and sugar, often flavored with cardamom and nuts."
  },
  {
    name:"Cake",
    count: 1,
    img:'/img/CAKE.jpg',
    desc:"lorem asdasdas dasdasfv cv as dfd dqwe2as"
  },
{
    name:"Fresh Juice",
    count: 1,
    img:'/img/juice.jpg',
    desc:"Mysore Pak is a rich, traditional Indian sweet made from gram flour, ghee, and sugar."
  }
];
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll:2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
var settings2 = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
   <div className='prod-full'>
    <h1 className='mb-4 text-center display-4 for-sweet'>Sweets</h1>
     <Slider className='Sweet w-75   mx-auto d-flex' {...settings}>
    
        {sweet.map((data, index) => (
          <div className='  my-4  w-75 mx-auto   sweet-slide d-flex aling-items-center flex-column  p-4' key={index}>
            <img className=' sweet-slide-img mx-auto ' src={data.img} alt={data.name} />
            <h1 className='text-center   mx-auto my-2 '>{data.name}</h1>
            <p className='text-center   mx-auto my-2'>{data.desc}</p>
            <button className='btn btn-danger' onClick={()=>addProduct(data)}>For Order</button>
          </div>
        ))}
     </Slider>
    <h1 className='my-4 text-center display-4 for-sweet'>Snacks</h1>
     <Slider className='Sweet w-75   mx-auto d-flex' {...settings2}>
    
        {snacks.map((data, index) => (
          <div className='  my-4  w-75 mx-auto   snacks-slide d-flex justify-content-evenly aling-items-center flex-column  p-4' key={index}>
            <img className=' snacks-slide-img mx-auto ' src={data.img} alt={data.name} />
            <h1 className='text-center   mx-auto my-2 '>{data.name}</h1>
            <p className='text-center   mx-auto my-2'>{data.desc}</p>
            <button className='btn btn-danger' onClick={()=>addProduct(data)}>For Order</button>
          </div>
        ))}
     </Slider>
    <h1 className='my-4 text-center display-4 for-sweet'>Other Items</h1>
     <Slider className='Sweet w-75   mx-auto d-flex' {...settings2}>
    
        {others.map((data, index) => (
          <div className='  my-4  w-75 mx-auto   snacks-slide d-flex aling-items-center flex-column  p-4' key={index}>
            <img className=' snacks-slide-img mx-auto ' src={data.img} alt={data.name} />
            <h1 className='text-center   mx-auto my-2 '>{data.name}</h1>
            <p className='text-center   mx-auto my-2'>{data.desc}</p>
            <h4 className='text-dark text-center '> On Shop</h4>
          </div>
        ))}
     </Slider>
    </div>
  )
}

export default Product