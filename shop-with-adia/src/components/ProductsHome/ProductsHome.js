import React from 'react';
import styled from 'styled-components/macro';
import Product from './Product/Product';
import shopbg4 from './Assets/shopbg4.png';
// import mmJcProdShotThree from './exploreAssets/mmJcProdShotThree.png';
// import lauraMercierBGRemoved from './exploreAssets/lauraMercierBGRemoved.png';
// import { productData } from './Data/ProductData';

const ShopHome = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
`;

const ShopImage = styled.img`
    width: 100%;
    z-index: -1;
    margin-bottom: -700px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); 

    @media screen and (max-width: 1300px) {
      margin-top: 70px;
      margin-bottom: -470px;
    }

    @media screen and (max-width: 1100px) {
      margin-top: 70px;
      margin-bottom: -420px;
    }

    @media screen and (max-width: 900px) {
        margin-bottom: -220px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: -220px;
    }

    @media screen and (max-width: 500px) {
        margin-bottom: -190px;
    }

    @media screen and (max-width: 350px) {
        margin-bottom: -70px;
    }
`;

const ShopRows = styled.section`
    display: grid;
    row-gap: 3em;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    z-index: 1;
    margin-left: -2px;
    margin-right: 15px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ShopRowSub = styled.section`
  display: grid;
`;


const ProductsHome = ({ products, onAddToCart }) => {
  if (!products.length) return <p>Loading...</p>;
  console.log(products)

  return (
    <ShopHome>
      <div>
        <ShopImage src={shopbg4} alt="" />

        <ShopRows>
          {products.map((product) => (
            <ShopRowSub key={product.id}>
              <Product product={product} onAddToCart={onAddToCart} />
            </ShopRowSub>
          ))}
        </ShopRows>
      </div>
    </ShopHome>
  );
};

export default ProductsHome;