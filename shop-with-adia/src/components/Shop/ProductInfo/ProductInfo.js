import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import styled from 'styled-components/macro';
import { GiShoppingCart } from 'react-icons/gi';
import commerce from '../../../lib/commerce';
import { connect } from 'react-redux';

const SingleProdMain = styled.div`
    display: grid;
    align-items: center;
    padding-top: 1rem;
    width: 100vw;
    background-color: white;
    z-index: 1;
`;

const ProductWrapper =  styled.div `
    justify-content: center;
    align-items: center; 
    overflow: hidden;
`;

const LeftDiv = styled.div`
    float: left;
    width: 50vw;
    display: grid;
    grid-template-columns: 1fr;
    overflow-y: scroll;
    border: 1px solid #000;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border-top: none;
    border-right-style: dotted 3px;
    padding-top: 5rem
`;

const RightDiv = styled.div`
    float: right;
    width: 50vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    padding-top: 3.8rem;  
`;

const ImageOne = styled.img`
    height: 500px;
    width: 500px;
    object-fit: contain;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const PriceAndAddDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #fff;
    border: 1px solid #000;
    border-left: none;
    height: 8vh;
`;

const ProdNameDiv = styled.div `
    display: flex;
    margin-top: -4rem;
    height: 8rem;
    border-bottom: 1px solid #000;


    @media screen and (max-width: 1200px) {
        height: 10rem;
        margin-top: -1rem;
    }

    @media screen and (max-width: 1000px) {
        height: 12rem;
        margin-top: -1rem;
    }

    @media screen and (max-width: 678px) {
        height: 15.5rem;
        margin-top: -1rem;
    }
`;

const ProdName = styled.p `
    display: flex;
    margin: 1rem;
    font-size: 28px;
    margin-top: 1.5rem;
`;

const ProdDetails = styled.div `
    display: flex;
    text-align: start;
    border-bottom: 1px solid #000;
`;

const MyComments = styled.div `
    display: flex;
    text-align: start;
`;

const Details = styled.p `
    margin: 1rem;
`;

const Specs = styled.p `
    margin: 1rem;
`;

const PriceDiv = styled.div `
    display: flex;
    text-align: center;
    justify-content: center;
`;

const AddDiv = styled.div `
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const AddBtn = styled(Link)`
    display: flex;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: #f8d7c4;
    color: #000;
    width: 100%;
    height: 100%;
    pointer: cursor;
    text-decoration: none;

    &:hover {
        color: #fff;
    }
`;

const ProdPrice = styled.h2`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ShoppingCart = styled(GiShoppingCart)`
    height: 1.5rem;
    width: 1.5rem;

    @media screen and (max-width: 768px) {
        display: flex;
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 5 5%);
        margin-top: 3.5%
    }
`;

const ProductInfo = ({ products, onAddToCart }) => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

  useEffect(() => {
    // try {
      const fetchSingleProduct = async (productId) => {
      // commerce.products.retrieve('prod_7RqEv5xKOoZz4j').then((product) => console.log(product.name));
      const product = await commerce.products.retrieve({productId});
      setProduct(product);
    // } catch(err) {
    //   settProduct([]);
    //   console.log(err.message);
    // }
  }
  fetchSingleProduct();
}, [])

     const selectedProduct = products.map((singleProd, i) => {
        if (productId === singleProd.id)
        return (
            <ProductWrapper key={product.id} id={product.id} title={product.id}>
                <LeftDiv>   
                    <ImageOne src={product.image}/>
                    <ImageOne src={product.imageTwo}/>
                    <ImageOne src={product.imageThree}/>
                    <ImageOne src={product.imageFour}/>
                    <ImageOne src={product.imageFive}/>
                </LeftDiv>

                <RightDiv>
                    <PriceAndAddDiv>
                        <PriceDiv>
                            <ProdPrice> ${product.price} </ProdPrice>
                        </PriceDiv>
                        <AddDiv>
                            <AddBtn onClick={() => onAddToCart(product.id, 1)}> Add to Cart </AddBtn>
                        </AddDiv>
                    </PriceAndAddDiv>

                    <ProdNameDiv>
                        <ProdName>
                            {product.title}
                        </ProdName>
                    </ProdNameDiv>

                    <ProdDetails>
                        <Details> <h3> Product Details </h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Details>
                    </ProdDetails>

                    <MyComments>
                        <Specs> <h3> My Specs </h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                        </Specs>
                    </MyComments>
                </RightDiv>
            </ProductWrapper>
        )    
     });
     console.log(selectedProduct);
    
    return(
        <SingleProdMain>  
            {selectedProduct}
        </SingleProdMain>

        // <SingleProdMain>  
        //     <ProductWrapper> 
        //         if (product.id === product.sku)
        //         {products.map((prods) => {
        //             return (  
        //                 <div key={prods.id} id={prods.id} title={prods.title}>
        //                     <LeftDiv>   
        //                         <ImageOne src={prods.image}/>
        //                         <ImageOne src={prods.imageTwo}/>
        //                         <ImageOne src={prods.imageThree}/>
        //                         <ImageOne src={prods.imageFour}/>
        //                         <ImageOne src={prods.imageFive}/>
        //                     </LeftDiv>

        //                     <RightDiv>
        //                         <PriceAndAddDiv>
        //                             <PriceDiv>
        //                                 <ProdPrice> ${prods.price} </ProdPrice>
        //                             </PriceDiv>
        //                             <AddDiv>
        //                                 <AddBtn> Add to Cart </AddBtn>
        //                             </AddDiv>
        //                         </PriceAndAddDiv>

        //                         <ProdNameDiv>
        //                             <ProdName>
        //                                 {prods.title}
        //                             </ProdName>
        //                         </ProdNameDiv>

        //                         <ProdDetails>
        //                             <Details> <h3> Product Details </h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        //                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        //                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        //                             </Details>
        //                         </ProdDetails>

        //                         <MyComments>
        //                             <Specs> <h3> My Specs </h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        //                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        //                             exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        //                             dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        //                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        //                             mollit anim id est laborum.
        //                             </Specs>
        //                         </MyComments>

        //                     </RightDiv>
        //                 </div>  

        //             )
        //         })}
            

        //     </ProductWrapper>  
        // </SingleProdMain>
        
    )
}


export default ProductInfo;