// import React from 'react';
// import styled from 'styled-components/macro';


// const CartMain = styled.div`
//     display: flex;
//     justify-content: center;
//     margin-left: auto;
//     margin-right: auto;
//     max-width: 1400px;
// `;

// const CartRows = styled.section`
//     display: grid;
//     row-gap: 8em;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     z-index: 1;
//     margin-left: 5px;
//     margin-right: 5px;
//     ${'' /* margin-bottom: 5rem; */}

//     @media screen and (max-width: 1400px) {
//         grid-template-columns: 1fr 1fr 1fr;
//     }

//     @media screen and (max-width: 1100px) {
//         grid-template-columns: 1fr 1fr;
//     }

//     @media screen and (max-width: 768px) {
//         grid-template-columns: 1fr;
//     }
// `;

// const ProductMain = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-end;
//     margin: 10px;
//     padding: 20px;
//     width: 100%;
//     max-height: 400px;
//     min-width: 100px;
//     background-color: white;
//     z-index: 1;
//     border: 1px solid #000;
// `;

// const TotalDiv = styled.div ``;
// const Subtotal = styled.div ``;

// const Cart = ({ cart }) => {
//     const isEmpty = cart.line_items.length === 0;
//     // const isEmpty = !cart.line_items.length;

//     const EmptyCart = () => {
//         <div> You have no items in your shopping cart.. Go shop! </div>
//     }

//     const FilledCart = () => {
//         <> 
//             <CartRows>  
//                 {cart.line_items.map((item) => {
//                     <ProductMain key={item.id}>
//                         <> <h1> products </h1> </>
//                     </ProductMain>
//                 })}
//             </CartRows>
//             <TotalDiv> 
//                 <Subtotal>
//                     <h1> 
//                     Your Subtotal: {cart.subtotal.formatted_with_symbol}
//                     </h1>

//                     <div>
//                         <button> 
//                             <h3> Empty Cart </h3>
//                         </button>
//                         <button> 
//                             <h3> Check out </h3>
//                         </button>
//                     </div>

//                 </Subtotal>
//             </TotalDiv>
//         </>
//     }

//     return (
//         <CartMain>
//             <h1> Your Shopping Cart </h1>
//             { isEmpty ? <EmptyCart/> : <FilledCart/>}
//         </CartMain>
//     )
// }

// export default Cart;
