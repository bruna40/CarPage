import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #white;
    color: #53D4FF;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    
    input {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 0;
        border-radius: 5px;
        background: #53D4FF;
        color: #7A7A7A;
        font-size: 1rem;
        font-weight: 400;
        transition: 0.2s;
        &:focus {
            background: #7A7A7A;
            color: #53D4FF;
        }
    }

    button {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 0;
        border-radius: 5px;
        background: #53D4FF;
        color: #7A7A7A;
        font-size: 1rem;
        font-weight: 400;
        transition: 0.2s;
        &:hover {
            background: #7A7A7A;
            color: #53D4FF;
        }
    }

`;