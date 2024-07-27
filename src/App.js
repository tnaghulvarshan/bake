import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {useState ,useEffect} from "react";
import Navbar from "./components/navbar/index";
import Home from "./components/home/index";
import Product from "./components/product/index";
import Cart from "./components/cart/index";
import Footer from "./components/footer/index";
import './App.css';

function App() {
  const [cart,setcart]=useState(() => {
    const savedCart = localStorage.getItem("ITEMS");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  
 function addProduct(data) {
  const isAlreadyInCart = cart.some(item => item.name === data.name);
  if(isAlreadyInCart){
    alert("already added to cart");
  }
  else{
  setcart(prevCart => [...prevCart,data]);
  console.log(cart);
} }


useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(cart))

 
},[cart])
function deleteItem(index) {
    setcart(prevCart => {
        const newCart = [...prevCart];
        newCart.splice(index, 1); 
        return newCart;
      });
  }

function countDecrease(index) {
  setcart(prevCart => {
    const newCart = [...prevCart];
    if (newCart[index].count > 1) {
      newCart[index].count--;
    }
    return newCart;
  });
}
function countIncrease(index) {
  setcart(prevCart => {
    const newCart = [...prevCart];
    newCart[index].count++;
    return newCart;
  });
}
 
  return (
  <Router>
    <Navbar></Navbar>
<Routes>
<Route path="/" element={<Home></Home>}></Route>
<Route path="/Product" element={<Product addProduct={addProduct}></Product>}></Route>
<Route path="/cart" element={<Cart cart={cart} deleteItem={deleteItem} countIncrease={countIncrease} countDecrease={countDecrease} ></Cart>}></Route>

</Routes>
<Footer></Footer>
  </Router>
  );
}

export default App;
