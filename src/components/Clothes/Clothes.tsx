import React from 'react';
import {Clothe} from "../../types";
import ClotheItem from './ClotheItem';

interface Props {
  clothes: Clothe[];
}

const Clothes: React.FC<Props> = ({clothes}) => {
  return (
   <>
     <h4>Clothes</h4>
     {clothes.map((clothe) => (
       <ClotheItem
         key={clothe.id}
         clothe={clothe}
       />
     ))}
   </>
  );
};

export default Clothes;
