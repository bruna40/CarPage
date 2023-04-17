import styled from "styled-components";

export const ContainerTable = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    background: #7A7A7A;
    border-radius: 5px;
    width: 100%;

    color: #53D4FF;
    margin: 0 auto;
    margin-top: 50px;

    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #53D4FF;
        border-radius: 5px;
        color: #53D4FF;
        font-size: 1rem;
        font-weight: 400;
        transition: 0.2s;


        th {
            padding: 10px;
            border: 1px solid #53D4FF;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: 400;
        }

        td {
            padding: 10px;
            border: 1px solid #53D4FF;
            border-radius: 5px;
            color: #53D4FF;
            font-size: 1rem;
            font-weight: 400;

        }
    }
`;