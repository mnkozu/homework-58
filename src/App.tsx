import React, {useState} from 'react';
import {Clothe} from "./types";
import Clothes from "./components/Clothes/Clothes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [clothes, setClothes] = useState<Clothe[]>([
    {name: "Sweater", size: "S", image: "https://i.pinimg.com/564x/7f/0c/9d/7f0c9d5db168159e9d5484a436a3a8dc.jpg", color: "red", price: 3000, amount: 2, id: "sweater"},
    {name: "Coat", size: "M", image: "https://i.pinimg.com/564x/b8/7f/b7/b87fb7efdc2524f17fd41909a2a937cf.jpg",color: "black", price: 9000, amount: 1, id: "coat"},
    {name: "Blouse", size: "XS", image: "https://i.pinimg.com/564x/21/9c/04/219c045e4fa72f407b4b9f9c66c7de31.jpg",color: "white", price: 2000, amount: 3, id: "blouse"}
  ])

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <div className="row mt-2">
          <div className="col">
            <Clothes clothes={clothes}/>
          </div>
          <div className="col">
            Cart
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
