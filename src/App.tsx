import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Clothes from "./components/Clothes/Clothes";
import Cart from './components/Cart/Cart';
import {CartClothe, Clothe} from "./types";

function App() {
  const [clothes, setClothes] = useState<Clothe[]>([
    {name: "Sweater", size: "S", image: "https://i.pinimg.com/564x/7f/0c/9d/7f0c9d5db168159e9d5484a436a3a8dc.jpg", color: "red", price: 3000, id: "sweater"},
    {name: "Coat", size: "M", image: "https://i.pinimg.com/564x/b8/7f/b7/b87fb7efdc2524f17fd41909a2a937cf.jpg",color: "black", price: 9000, id: "coat"},
    {name: "Blouse", size: "XS", image: "https://i.pinimg.com/564x/21/9c/04/219c045e4fa72f407b4b9f9c66c7de31.jpg",color: "white", price: 2000, id: "blouse"}
  ]);

  const [cartClothes, setCartClothe] = useState<CartClothe[]>([]);

  const addClotheToCart = (clothe: Clothe) => {
    setCartClothe(prev => {
      const existingIndex = prev.findIndex(item => {
        return item.clothe === clothe;
      });

      if (existingIndex !== -1) {
        const itemsCopy = [...prev];
        const itemCopy = {...prev[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      }
      return [...prev, {clothe, amount: 1}];
    });
  };

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <div className="row mt-2">
          <div className="col">
            <Clothes clothes={clothes} addToCart={addClotheToCart}/>
          </div>
          <div className="col">
            <Cart cartClothes={cartClothes}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
