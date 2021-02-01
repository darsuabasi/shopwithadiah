import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import CartItem from './CartItem/CartItem';

const CartMain = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    justify-content: center;
    padding-top: 5rem;
    font-size: 30px;
    width: 100%;
    height: 100vh;
`;

const CartHeading = styled.p`
    height: 5rem;
    font-size: 38px;
    margin-top: 1rem;
    text-align: center;
`

const CartRows = styled.div`
    row-gap: 4em;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    justify-content: center;

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

const CartRowSub = styled.div`
    display: flex;
    margin-top: 1rem;
    justify-content: center;
`;

const ProductMain = styled.div`
`;

const TotalDiv = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
    margin-left: 7rem;
    border: 3px solid #000;
    width: 800px;

    @media screen and (max-width: 1200px) {
        width: 600px;
        margin-left: 5rem;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        margin-left: -0.8rem;
    }

    @media screen and (max-width: 500px) {
        width: 400px;
        margin-left: -0.3rem;
    }

`;
const Subtotal = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

     @media screen and (max-width: 1200px) {
        width: 600px;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        margin-left: -2rem;
    }

    @media screen and (max-width: 500px) {
        width: 400px;
        margin-left: -0.8rem;
    }
`;

const SubTotHeading = styled.p `
    font-size: 40px;
    text-align: center;
    justify-content: center;
    align-self: center;
    padding: 0.5rem;
    width: 700px;

    @media screen and (max-width: 500px) {
        ${'' /* width: px; */}
    }
`

const ActionBtnDiv = styled.div `
    display: grid;
    grid-template-rows: 1fr 1fr;
    border-left: 3px solid #000;
    width: 320px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`

const EmptyDiv = styled.div `
    justify-content: center;
    text-align: center;
    align-items: center;
    border-bottom:  3px solid #000;
    width: 205px;

    @media screen and (max-width: 500px) {
        width: 150px;
        font-size: 18px;
    }
`

const EmptyDivTwo = styled.div `
    justify-content: center;
    text-align: center;
    align-items: center;

    @media screen and (max-width: 500px) {
        width: 150px;
        font-size: 18px;
    }
`

const EmptyCartDiv = styled.div `
    font-size: 18px;
    width: 100%;
    height: 100%;
`

const NoItemsHeading = styled.p `
    text-align: center;
    font-size: 30px;
    margin-top: -30rem;
`

const FilledCartDiv = styled.div `
    width: 100%;
    height: 10vh;
    height: 100%;
    justify-content: start;
`

const EmptyCartBtn  = styled(Link) `
    background: ${({ primary }) => (primary ? '#fff' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursror: pointer;
    text-decoration: none;
    transition: 0.4s;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')}; 
    color: ${({ primary }) => (primary ? '#000' : '000d1a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')}; 
`

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyCart = () => (
        <EmptyCartDiv>
            <NoItemsHeading>You have no items in your shopping cart.
                <Link style={{textDecoration:'none', color: '#000'}} to="/adiah/shop"> Go shop</Link>!
            </NoItemsHeading>
        </EmptyCartDiv> 
    );
    
    if (!cart.line_items) return 'Loading';

    const renderCart = () => (
        <FilledCartDiv> 
            <CartRows>
                {cart.line_items.map((lineItem) => (
                    <CartRowSub key={lineItem.id}>
                        <CartItem key={lineItem.id} item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                    </CartRowSub>
                ))}
            </CartRows>

            

            <TotalDiv> 
                <Subtotal>
                    <SubTotHeading> 
                        Your Subtotal: {cart.subtotal.formatted_with_symbol}
                    </SubTotHeading>

                    <ActionBtnDiv>
                        <EmptyDiv> 
                            <EmptyCartBtn primary={true} big={true} onClick={handleEmptyCart}> Empty Cart </EmptyCartBtn>
                        </EmptyDiv>
                        <EmptyDivTwo> 
                            <EmptyCartBtn primary={true} big={true}  to="/adiah/shop/checkout"> Checkout </EmptyCartBtn>
                        </EmptyDivTwo>
                    </ActionBtnDiv>

                </Subtotal>
            </TotalDiv> 
           
        </FilledCartDiv>
    )

    return (
        <CartMain>
            <CartHeading> Your Shopping Cart </CartHeading>
            { !cart.line_items.length ? renderEmptyCart() : renderCart() }
        </CartMain>
    )
}

export default Cart;