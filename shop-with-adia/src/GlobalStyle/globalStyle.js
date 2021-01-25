import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Dancing Script', cursive;
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
    }

    html, body {
        overflow-x: hidden;

    }
`

export default GlobalStyle;