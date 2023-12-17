import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

ul,
ol {
    margin: 0;
    padding: 0;
}

img {
    display: block;
}
`