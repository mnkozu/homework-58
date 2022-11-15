import React from 'react';
import {Clothe} from "../../types";

interface Props {
  clothe: Clothe;
  onClick: React.MouseEventHandler;
}

const ClotheItem: React.FC<Props> = ({clothe, onClick}) => {
  const image = clothe.image;
  const imageStyle = {
    background: `url(${image}) no-repeat center center / cover`
  };

  return (
    <div className="card mb-2" onClick={onClick}>
      <div className="row no-gutters">
        <div className="col-sm-4 rounded-start" style={imageStyle}/>
        <div className="col-sm-8"><div className="card-body">
          <h5 className="card-title">{clothe.name}</h5>
          <p className="card-text small">Color: {clothe.color}</p>
          <p className="card-text small">Size: {clothe.size}</p>
          <p className="card-text">Price: {clothe.price} KGS</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ClotheItem;