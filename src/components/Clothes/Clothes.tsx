import React from 'react';
import {Clothe} from "../../types";
import ClotheItem from './ClotheItem';

interface Props {
  clothes: Clothe[];
  addToCart: (clothe: Clothe) => void;
}

const Clothes: React.FC<Props> = ({clothes, addToCart}) => {
  return (
   <>
     <h4>Clothes</h4>
     {clothes.map((clothe) => (
       <ClotheItem
         key={clothe.id}
         clothe={clothe}
         onClick={() => addToCart(clothe)}
       />
     ))}
   </>
  );
};

export default Clothes;
