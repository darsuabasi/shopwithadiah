import React from 'react';
import styled from 'styled-components/macro';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const ReviewMain = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1400px;
`;

// const ReviewList = styled.div`
    
// `;

// const ReviewListItem = styled.div`
    
// `;

// const ReviewListItemText = styled.div`
    
// `;


const Review = ({ checkoutToken }) => (
  <ReviewMain>
    <h6>Order summary</h6>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (

        <ListItem style={{ padding: '10px 0' }} key={product.name}>
        
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <p variant="body2">{product.line_total.formatted_with_symbol}</p>
        </ListItem>
      ))}
      
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <h1 variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </h1>
      </ListItem>
    </List>
  </ReviewMain>
);
export default Review;