import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { productData } from '../Data/ProductData';
import { GiShoppingCart } from 'react-icons/gi';

const SingleProdMain = styled.div`
    display: grid;
    align-items: center;
    ${'' /* justify-content: flex-end; */}
    ${'' /* margin: 10px; */}
    ${'' /* padding: 20px; */}
    padding-top: 1rem;
    width: 100vw;
    ${'' /* max-height: 400px; */}
    ${'' /* min-width: 100px; */}
    background-color: white;
    z-index: 1;
    ${'' /* border-style: dotted; */}
    ${'' /* padding-top: 5rem */}
`;

const ProductWrapper =  styled.div `
    ${'' /* width: 100%; */}
    ${'' /* height: 100%; */}
    ${'' /* display: flex; */}
    justify-content: center;
    align-items: center; 
    overflow: hidden;
    ${'' /* float: left; */}
    ${'' /* position: relative */}
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
    ${'' /* background: darkgreen; */}
    padding-top: 3.8rem;  
`;

const ImageOne = styled.img`
    ${'' /* position: absolute;  */}
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
    ${'' /* border: 1px solid #000; */}
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
        ${'' /* color: rgb(255, 99, 71); */}
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

const SingleProductDisplay = ({ id, title, price, image, imageTwo, imageThree, imageFour, imageFive }) => {
    
    return(
        <SingleProdMain>  
            <ProductWrapper> 
                {productData.map((prods, id) => {
                    return (  
                        <>
                            <LeftDiv key={id}>   
                                <ImageOne src={prods.image}/>
                                <ImageOne src={prods.imageTwo}/>
                                <ImageOne src={prods.imageThree}/>
                                <ImageOne src={prods.imageFour}/>
                                <ImageOne src={prods.imageFive}/>
                            </LeftDiv>

                            <RightDiv>
                                <PriceAndAddDiv>
                                    <PriceDiv>
                                        <ProdPrice> ${prods.price} </ProdPrice>
                                    </PriceDiv>
                                    <AddDiv>
                                        <AddBtn> Add to Cart </AddBtn>
                                    </AddDiv>
                                </PriceAndAddDiv>

                                <ProdNameDiv>
                                    <ProdName>
                                        {prods.title}
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
                        </>  

                    )
                })}
            

            </ProductWrapper>  
        </SingleProdMain>
        
    )
}


export default SingleProductDisplay;