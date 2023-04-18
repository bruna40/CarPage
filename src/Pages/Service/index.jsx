import { ContainerForm } from "./style";
import { useContext } from "react";
import { CycleContext } from "../../Context/CycleContext";
import { Relogio } from "../../Components/Relogio";
import { Cliente } from "../../Components/Cliente";


export function Service() {

    const { tempo, setTempo } = useContext(CycleContext);


    function start(contador = 0) {
        setTimeout(() => {
            setTempo(contador);
            start(contador + 1);
          }, 1000);
    }

    function stop () {
        dispatch(stop());
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
                <button type="button" onClick={stop}>Finalizar</button>
            </ContainerForm>
            <Relogio />
        </>
    )
}