import { Cliente } from "../../Components/Cliente";
import { ContainerForm } from "./style";

export function Service() {
    return (
        <>
            <Cliente />
            <ContainerForm>
                <label htmlFor="servico">Serviço:</label>
                <input type="text" id="servico" />
                <label htmlFor="valor">Valor:</label>
                <input type="text" id="valor" />
                <label htmlFor="funcionario">Funcionario:</label>
                <input type="text" id="funcionario" />
                <button type="button">Comerçar</button>
                <button type="button">Finalizar</button>
            </ContainerForm>
        </>
    )
}