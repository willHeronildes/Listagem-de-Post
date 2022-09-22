import styled from "styled-components";


export const Main = styled.main`
    display: flex;
    justify-content: center;


    padding: 3rem 0;

`;

export const Card = styled.div`
    background-color: #2F3644;
    padding: 30px 70px;
    border-radius: 15px;

`;

export const Title = styled.h1`
    font-family: Heebo;
    font-weight: 800;
    text-align: center;

    color: #D2DAF5;

    font-size: 3rem;
    margin-bottom: 5px;

`;

export const LinePost = styled.div`
   height: 2px;
   background-color: #3E445B;
  
`;

export const Card_body_post = styled.div`
    margin-top: 25px;

`;

export const Fields = styled.div`
    margin-top: 25px;

`;

export const Cabecalho = styled.label`
    display: block;
    margin-bottom: 7px;
    font-size: 1.2rem;
    color: #D2DAF5;
    font-family: Poppins;

`;


export const Input = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-size: 1.2rem;
    padding-left: 15px;

`;

export const Btn_post = styled.div`
    margin-top: 30px;
    text-align: center;

    button{
        font-family: Heebo;
        font-weight: 800;
        font-size: 1.3rem;

        padding: 5px 50px;
        color: #fff;
        background-color: #3DECB1;

        border: 0;
        border-radius: 10px;

        cursor: pointer;
    }
    
   .error-message {
        color: rgb(240, 47, 47);
    }
`;

export const Error_message = styled.p`
    color: rgb(240, 47, 47); 

`;


