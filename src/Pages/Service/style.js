import styled from "styled-components";

export const ContainerForm = styled.form`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 50px;
    background: #7A7A7A;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    color: #53D4FF;
    margin: 0 auto;
    margin-top: 50px;
    
    label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
        width: 100%;
        max-width: 500px;
        font-size: 1rem;
        font-weight: 400;
        color: #53D4FF;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 0;
        border-radius: 5px;
        color: #7A7A7A;
        font-size: 1rem;
        font-weight: 400;
        transition: 0.2s;
    }

    button {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
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