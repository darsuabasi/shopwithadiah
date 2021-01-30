import React from "react";
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import HoverImage from "react-hover-image";


const ProductMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;
    background-color: white;
    z-index: 1;
    border: 1px solid #000;
`;

const ProductImage = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    position: absolute;
    margin-bottom: 15px;
    ${'' /* padding-top: 15px; */}

    &:hover {
      transition:transform 2s ease;
      transform: scale(1.2);
      flex-grow: 0.5; 
    }
`;

const ProductInfo = styled.div`
    height: 100px;
    font-size: 20px;
    margin-bottom: 15px;
`;

const ProductPrice = styled.div`
    margin-top: 5px;
`;

const ProdButton = styled(Link)`
    background: #000;
    border: 2px solid;
    margin-top: 10px;
    padding: 8px;
    border-color: #fff;
    color: #fff; 
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;

    &:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }
`

const ProductRating = styled.div`
    display: flex;
`;

const ButtonDiv = styled.div`
    display: flex;
`;



const Product = ({ product, onAddToCart }) => {

  // const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <ProductMain key={product.id} id={product.id} title={product.id}>
      <ProductInfo>
        <p>{product.name}</p>
        <ProductPrice>
          <small>$</small>
          <strong>{product.price.formatted}</strong>
        </ProductPrice>
        <h5 dangerouslySetInnerHTML={{ __html: product.description }}></h5>
      </ProductInfo>
      {/* add 2nd image for hover effect */}
      <HoverImage style={{maxHeight:'300px', width:'100%', objectFit:'contain', marginBottom:'15px', transition:'transform 2s ease-in-out'}} src={product.assets[0].url} hoverSrc={product.assets[1].url} title={product.name} alt=""/>
      
      <ButtonDiv>
        <ProdButton title={product.name} to={`/adiah/shop/products/${product.name}`}>View More</ProdButton>
        <ProdButton onClick={() => onAddToCart(product.id, 1)}> Add to Cart </ProdButton>
      </ButtonDiv>

    </ProductMain>
  );
}

export default Product;