import { ContainerForm } from "./style";
import { useState, useContext } from "react";
import { CycleContext } from "../../Context/CycleContext";
import { Relogio } from "../../Components/Relogio";
import { Cliente } from "../../Components/Cliente";


export function Service() {
    const [selecionado, setSelecionado] = useState();
    const { tempo } = useContext(CycleContext);


    function start(contador) {
        setTimeout(() => {
            if(contador > 0) {
              setTempo(contador - 1);
              return regressiva(contador - 1);
            }
            
        }, 1000);
    } 
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
                <button type="button" onClick={() => {start(tempo)}}>Comerçar</button>
                <button type="button">Finalizar</button>
            </ContainerForm>
            <Relogio
                selecionado={selecionado}
            />
        </>
    )
}