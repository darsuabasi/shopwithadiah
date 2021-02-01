import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const CartItemCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    width: 1000px;
    height: 250px;
    border: 2px solid #000;

    @media screen and (max-width: 1200px) {
      width: 730px;
    }

    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      text-align: center;
      align-items: center;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      width: 300px;
      height: 450px;
      border: 2px solid #000;  
    }
`;

const ImageDiv = styled.div `
  height: 250px;

  @media screen and (max-width: 768px) {
      height: 215px;
    }
`

const CartItemImage = styled.img`
    height: 240px;
    width: 250px;
    margin-bottom: 10px;
    margin-right: 3px;
    margin-left: 3px;
    margin-top: 0.2rem;
    object-fit: contain;
    border-right: 2px solid #000;

    @media screen and (max-width: 1200px) {
      width: 240px;
    }

    @media screen and (max-width: 768px) {
      height: 210px;
      width: 290px;
      margin-bottom: 5px;
      margin-right: 3px;
      margin-left: 3px;
      margin-top: 0.2rem;
      object-fit: contain;
      border-right: none;
    }

`;

const CartItemContent = styled.div`
    display: grid;
    height: 6.5rem;
    grid-template-rows: 1fr 1fr;
    justify-content: space-between;
    margin-left: 2rem;
    padding-left: 0.5rem;
    width: 150px;

    @media screen and (max-width: 1200px) {
      width: 130px;
      margin-left: 0.1rem;
      padding-left: 0.1rem;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      width: 280px;
      height: 30px;
    }
`;

const ItemName = styled.p`
    font-size: 22px;
    text-align: center;
    color: #000;

    @media screen and (max-width: 1200px) {
      text-align: start;
      margin-left: 0.2rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 18px;
      text-align: center;
    }
`;

const ItemPrice = styled.p`
    font-size: 20px;
    width: 200px;
    text-align: start;
    height: 100px;
    color: #000;
    margin-left: 0.5rem;

    @media screen and (max-width: 1200px) {
      font-size: 18px;
      width: 146px;
      text-align: start;
      height: 50px;
      color: #000;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      padding-left: 0.15rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 18px;
      text-align: center;
      height: 30px;
      border: none;
    }
`;


const CartItemActions = styled.div`
    display: grid;
    width: 550px;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    height: 2.6rem;
  
    @media screen and (max-width: 1200px) {
      width: 325px;
      text-align: start;
    }

    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      text-align: center;
      align-items: center;
      height: 170px;
      width: 300px;
    }
`;

const NameDiv = styled.div `
    height: 100px;

  @media screen and (max-width: 1200px) {
      width: 323px;
    }
    @media screen and (max-width: 768px) {
      height: 50px;
      width: 280px;
      text-align: center;
      padding: 0.2rem;
    }

`
const QuantityDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 2.6rem;
    margin-top: 1rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 1200px) {
      width: 323px;
    }

    @media screen and (max-width: 768px) {
      height: 50px;
      width: 280px;
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      margin-left: 0.5rem;
    }
`;

const RemoveDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 2.6rem;
    border: 2px solid #000;
    border-top: 2px solid #000;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 1px 1px 3px 3px #d3d3d3;
        border: none;
    }

    @media screen and (max-width: 1200px) {
      width: 323px;
      margin-left: 0.3rem;
    }

    @media screen and (max-width: 768px) {
      height: 40px;
      width: 280px;
      text-align: center;
      margin-top: -1rem;
      margin-left: 0.6rem;
    }
`;


const Button = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 0.2rem;
    text-decoration: none;
    color: #000;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
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


      <CartItemActions>
        <NameDiv>
          <ItemName>{item.name}</ItemName>
        </NameDiv>
        <QuantityDiv>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <h5>{item.quantity}</h5>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </QuantityDiv>
        <RemoveDiv> 
          <Button type="button" onClick={() => handleRemoveFromCart(item.id)}> Remove </Button>
        </RemoveDiv>
      </CartItemActions>

      
      <CartItemContent>
        <ItemPrice>Total: {item.line_total.formatted_with_symbol}</ItemPrice>
      </CartItemContent>

      
    </CartItemCard>
  );
};

export default CartItem;