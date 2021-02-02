import { create } from 'domain';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    min-height: 100%;
    background: var(--primary);
}
*,button, input{
    border: 0;
    background: none;
    font-family: 'Times New Roman', Times, serif;
}
`;
