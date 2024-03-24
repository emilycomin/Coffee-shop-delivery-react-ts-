import { createGlobalStyle } from 'styled-components'

//criando variaveis globais
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border-style: border-box;
}
body{
    background-color: ${props => props.theme.baseBackground};
    color: ${props => props.theme.baseTitle};
}
body, input, h2, h3, span {
    font-family: 'Roboto' sans-serif;
}
h1{
    font-family: 'Baloo 2', sans-serif;
}
`