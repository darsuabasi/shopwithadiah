import React from 'react';
import { useHistory } from 'react-router-dom';
// import HoverImage from "react-hover-image";
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
    ${'' /* height: 100vh; */}
    z-index: -1;
    margin-bottom: -550px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)); 

    @media screen and (max-width: 1100px) {
        margin-bottom: -350px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: -150px;
    }
`;

const ShopRows = styled.section`
    display: grid;
    row-gap: 8em;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
    ${'' /* margin-bottom: 5rem; */}

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
  const history = useHistory();
  const singlePorductRedirect = (prodId) => history.push(`/adiah/shop/${prodId}`);
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