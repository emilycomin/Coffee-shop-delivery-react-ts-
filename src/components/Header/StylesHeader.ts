import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 34px 160px;
    position: fixed;
    width: 80%;
    top: 0;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.baseBackground};
`;
export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    span{
        background-color: ${props =>props.theme.purpleLight};
        display: flex;
        align-items: center;
        border-radius: 6px;
        padding: 8px;
        gap: 4px;
    }
    button{
        background-color: ${props => props.theme.yellowLight};
        padding: 8px;
        border-radius: 6px;
        border: none;
        position: relative; 
    }
    h3{
       background-color: ${props => props.theme.yellowDark};
       border-radius: 1000px;
        font-weight: 700;
        font-size: 12px ;
        padding: 4px 8px;
       position: absolute;
       right: -10px;
       top: -10px;
    }
`;