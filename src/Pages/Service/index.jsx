import { ContainerForm } from "./style";
import { useState, useContext, useEffect } from "react";
import { CycleContext } from "../../Context/CycleContext";
import { Relogio } from "../../Components/Relogio";
import { Cliente } from "../../Components/Cliente";


export function Service() {
    const [selecionado, setSelecionado] = useState();
    const { tempo, setTempo } = useContext(CycleContext);


    function start(contador = 0) {
        setTimeout(() => {
            setTempo(contador);
            start(contador + 1);
          }, 1000);
        console.log('start');
        console.log(contador);
    }

    function stop (contador) {
        clearTimeout(contador);
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
                <button type="button" onClick={() => start(tempo)}>Comerçar</button>
                <button type="button" onClick={() => stop(tempo)}>Finalizar</button>
            </ContainerForm>
            <Relogio
                selecionado={selecionado}
            />
        </>
    )
}