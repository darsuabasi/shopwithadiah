import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'; 
import styled from 'styled-components/macro';
import { GiShoppingCart } from 'react-icons/gi';
import commerce from '../../../lib/commerce';
import { connect } from 'react-redux';

const SingleProdMain = styled.div`
    display: grid;
    align-items: center;
    width: 100vw;
    background-color: white;
    z-index: 1;
    overflow: hidden;
`;

const ProductWrapper =  styled.div `
    justify-content: center;
    align-items: center; 
    overflow: hidden;
`;

const LeftDiv = styled.div`
    float: left;
    width: 50vw;
    height: 89vh;
    display: grid;
    grid-template-columns: 1fr;
    border: 1px solid #000;
    justify-content: center;
    align-items: center;
    justify-items: center;
    border-right-style: dotted 3px;
    margin-top: 11vh;
    overflow-y: scroll;
`;

const ImageOne = styled.img`
    height: 500px;
    width: 500px;
    object-fit: contain;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;

const RightDiv = styled.div`
    float: right;
    width: 50vw;
    height: 89vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    border: 0.5px solid #000;
    margin-top: 11vh;
`;

const PriceAndAddDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #fff;
    border: 1px solid #000;
    border-left: none;
    height: 8vh;
`;

const PriceDiv = styled.div `
    display: flex;
    text-align: center;
    justify-content: center;
`;

const ProdPrice = styled.p`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
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

// -----------------

const ProdNameDiv = styled.div `
    display: flex;
    margin-top: -1rem;
    height: 5rem;
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
`;

const ProdDetails = styled.div `
    display: flex;
    text-align: start;
    border-bottom: 1px solid #000;
    height: 100%;
`;

const Details = styled.p `
    margin: 1rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`;


const ProdExtra = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 1px solid #000;
    width: 100%;
`;

const CategoryTitle = styled.div `
    display: flex;
    height: 100%;
    width: 100%;
    padding-left: 1.5%;
    padding-bottom: 1.5%;
    padding-top: 1.5%;
`;

const RelatedProdContainer = styled.div `
    display: grid;
    grid-template-colums: 1fr 1fr 1fr;
`;

const RelatedProdSection = styled.div `
    display: grid;
    grid-template-columns: 1fr; 
    height: 100%;
    width: 200px;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
`;

const RelatedProdDetails = styled.div `
    display: grid;
    grid-template-columns: 1fr; 
    text-align: center;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-left: 1.5%;
`;

const RPImage = styled.img`
    height: 190px;
    width: 150px;
    cursor: pointer;
`

// ---------------------------------------



const MyComments = styled.div `
    display: flex;
    text-align: start;
`;


const Specs = styled.p `
    margin: 1rem;
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
    const reg = /(<([^>]+)>)/ig;
    const history = useHistory();

    // const handleSoldOut = () => {
    //     if(singleProd.conditionals.is_sold_out === true) {
    //         return "This product is sold out."
    //         } else {
    //             return "This product is still in stock."
    //         }
    //     }

    // const handleIsActive = () => {
    // if(singleProd.conditionals.is_active === true) {
    //     return "This product no longer active.")
    //     } else {
    //         return "This product is still active."
    //     }
    // }


     const selectedProduct = products.map((singleProd, media, seo, assets, conditionals, related_products, i) => {
         

        if (productId === singleProd.id)

        return (
            <ProductWrapper key={singleProd.id} id={singleProd.id}>
                <LeftDiv>   
                    <ImageOne src={singleProd.assets[0].url}/>
                    <ImageOne src={singleProd.assets[1].url}/>
                    <ImageOne src={singleProd.assets[2].url}/>
                    <ImageOne src={singleProd.assets[3].url}/>
                    <ImageOne src={singleProd.assets[4].url}/>
                </LeftDiv>

                <RightDiv key={singleProd.id}>
                    <PriceAndAddDiv>
                        <PriceDiv>
                            <ProdPrice> ${singleProd.price.formatted_with_code} </ProdPrice>
                        </PriceDiv>
                        <AddDiv>
                            <AddBtn onClick={() => onAddToCart(singleProd.id, 1)}> Add to Cart </AddBtn>
                        </AddDiv>
                    </PriceAndAddDiv>

                    <ProdNameDiv>
                        <ProdName>
                            {singleProd.name}
                        </ProdName>
                    </ProdNameDiv>

                    <ProdDetails>
                        <Details> 
                            <div style={{marginBottom: '0.5rem'}}> 
                                {singleProd.description.replace(reg, '')}
                            </div>
                            <div> 
                                Quantity Remaining: {singleProd.quantity}
                            </div>
                            <div> 
                                {/* Is this product sold out? {singleProd.conditionals.is_sold_out} */}
                            </div>
                            <div> 
                               {/* Is this product active? {singleProd.conditionals.is_active} */}
                            </div>
                            <div> 
                                {/* SEO Title: {singleProd.seo.title}
                                SEO Description: {singleProd.seo.description} */}
                            </div>

                        </Details>
                    </ProdDetails>

                    <ProdExtra>
                        <CategoryTitle>
                            <h2>Other Related {singleProd.categories[0].name} </h2>
                        </CategoryTitle>

                        <RelatedProdContainer> 
                            {singleProd.related_products.map((relatedProd, i) => (
                                <RelatedProdSection>
                                    <RelatedProdDetails key={relatedProd.id}> 
                                        <p style={{cursor:"pointer"}} onClick={() => history.push(`/adiah/shop/products/${relatedProd.id}`)}> {relatedProd.name} </p>
                                        <RPImage onClick={() => history.push(`/adiah/shop/products/${relatedProd.id}`)} src={relatedProd.media.source}/>
                                        {relatedProd.price.formatted_with_code}
                                    </RelatedProdDetails>
                                </RelatedProdSection>
                            ))}
                        </RelatedProdContainer>
                    </ProdExtra>

                    {/* <MyComments>
                    </MyComments> */}
                </RightDiv>
            </ProductWrapper>
        )    
        console.log(singleProd);
     });
     console.log(selectedProduct);

    
    return(
        <SingleProdMain>  
            {selectedProduct}
        </SingleProdMain>
    )
}


export default ProductInfo;