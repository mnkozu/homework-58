import React, {useState} from 'react';
import {CartClothe} from "../../types";
import CartItem from "./CartItem";
import Modal from "../Modal/Modal";


interface Props {
  cartClothes: CartClothe[];
}

const Cart: React.FC<Props> = ({cartClothes}) => {
  const [showModal, setShowModal] = useState(false);

  const total = cartClothes.reduce((sum, cartClothes) => {
    return sum + cartClothes.amount * cartClothes.clothe.price;
  }, 0);

  let cartCont = (
    <div className="alert alert-primary">Cart is empty! Add something!</div>
  );

  if (cartClothes.length > 0) {
    cartCont = (
      <>
        {cartClothes.map(cartClothe => (
          <CartItem
            key={cartClothe.clothe.id}
            cartClothe={cartClothe}
          />
        ))}
        <div className="card border-0 p-2">
          <div className="row">
            <div className="col text-right">
              Total:
            </div>
            <div className="col-3 text-right">
              <strong>{total}</strong> KGS
            </div>
          </div>
        </div>
        <button
          className="w-100 btn btn-primary"
          onClick={() => (setShowModal(true))}
        >
          Order
        </button>
      </>
    );
  }

  const continued = () => alert("You continued!");

  const cancel = () => setShowModal(false);

  const btns = [
    {type: 'primary', label: 'Continue', onClick: continued},
    {type: 'danger', label: 'Close', onClick: cancel}
  ];

  return (
    <>
      <h4>Cart</h4>
      {cartCont}
      <Modal show={showModal} title="Order" onClose={cancel}>
        <div className="modal-body">
          Content
        </div>
        <div className="modal-footer">
          {btns.map(btn => (
            <button
              key={btn.label}
              className={`btn btn-${btn.type}`}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Cart;