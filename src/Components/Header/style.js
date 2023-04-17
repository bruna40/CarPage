import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    height: 60px;
    background: #7A7A7A;
    color: #53D4FF;
    margin-bottom: 20px;

    img {
        width: 100px;
    }

    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        p {
            font-size: 1rem;
            font-weight: 400;
        }

        button {
            width: 100px;
            padding: 10px;
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
    }
   


`;