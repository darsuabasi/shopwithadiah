import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const CartItemCard = styled.div`
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 300px;
    height: 400px;
    border: 2px solid #000;
`;

const ImageDiv = styled.div `
  height: 250px;
`

const CartItemImage = styled.img`
    height: 240px;
    width: 290px;
    margin-bottom: 10px;
    margin-right: 3px;
    margin-left: 3px;
    margin-top: 0.2rem;
    object-fit: contain;
`;

const CartItemContent = styled.div`
    display: grid;
    height: 6.5rem;
    grid-template-rows: 1fr 1fr;
    justifyContent: space-between;
`;

const ItemName = styled.p`
    font-size: 22px;
    text-align: center;
    color: #000;
`;

const ItemPrice = styled.p`
    font-size: 20px;
    text-align: center;
    height: 100px;
    color: #000;
`;


const CartItemActions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justifyContent: center;
    height: 2.6rem;
`;

const QuantityDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 2.6rem;
    border: 1px solid #000;
    border-top: 2px solid #000;
`;

const RemoveDiv = styled.div`
    display: flex;
    justifyContent: space-between;
    justify-content: center;
    height: 2.6rem;
    border: 1px solid #000;
    border-top: 2px solid #000;
`;


const Button = styled(Link)`
    display: flex;
    alignItems: center;
    padding-bottom: 1rem;
    text-decoration: none;
    color: #000;
`;



const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  
  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    onUpdateCartQty(lineItemId, newQuantity);
  };

  const handleRemoveFromCart = (lineItemId) => {
    onRemoveFromCart(lineItemId);
  };

  return (
    <CartItemCard>
      <ImageDiv>
        <CartItemImage src={item.media.source} alt={item.name}/>
      </ImageDiv>

      <CartItemContent>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{item.line_total.formatted_with_symbol}</ItemPrice>
      </CartItemContent>

      <CartItemActions>
        <QuantityDiv>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <h5>{item.quantity}</h5>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </QuantityDiv>
        <RemoveDiv> 
          <Button type="button" onClick={() => handleRemoveFromCart(item.id)}> Remove </Button>
        </RemoveDiv>
      </CartItemActions>

    </CartItemCard>
  );
};

export default CartItem;