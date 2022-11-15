import React from 'react';
import {CartClothe} from "../../types";

interface Props {
  cartClothe: CartClothe;
}

const CartItem: React.FC<Props> = ({cartClothe}) => {
  const price = cartClothe.amount * cartClothe.clothe.price;
  return (
    <div className="card mb-2 p-2">
      <div className="row align-content-center">
        <div className="col">{cartClothe.clothe.name}</div>
        <div className="col-2">{cartClothe.amount}</div>
        <div className="col-3 text-right">{price} KGS</div>
      </div>
    </div>
  );
};

export default CartItem;