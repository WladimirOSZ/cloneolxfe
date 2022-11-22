import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';
import { FaEdit } from 'react-icons/fa';

const AdItem = (props) => {
  let price = '';

  if (props.data.priceNegotiable) {
    price = 'Preço Negociável';
  } else {
    price = `R$ ${props.data.price}`;
  }

  return (
    <Item className="aditem">
      <Link to={`/ad/${props.data.id}`}>
        {props.edit && (
          <Link to={`/edit-an-ad/${props.data.id}`} className="edit-button">
            <FaEdit />
          </Link>
        )}
        <div className="itemImage">
          <img src={props.data.image} alt="" />
        </div>
        <div className="itemName">{props.data.title}</div>
        <div className="itemPrice">{price}</div>
      </Link>
    </Item>
  );
};

export default AdItem;
