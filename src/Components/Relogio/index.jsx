import { useContext, useEffect } from 'react';
import { CycleContext } from '../../Context/CycleContext';
import { ContainerTimer } from './style';

export function Relogio() {

    const { tempo, selecionado } = useContext(CycleContext);
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');



    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(selecionado.tempo);
        }
    }, [selecionado]);

    return (
        <ContainerTimer>
            <span>{minutoDezena}</span>
            <span>{minutoUnidade}</span>
            <span>:</span>
            <span>{segundoDezena}</span>
            <span>{segundoUnidade}</span>
        </ContainerTimer>
    )
}