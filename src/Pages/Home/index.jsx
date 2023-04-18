import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CycleContext } from '../../Context/CycleContext';

export function Home() {
    const navigateTo = useNavigate();
    const { clientes, setClientes,  search, setSearch, idCliente, setIdCliente } = useContext(CycleContext);


    const findCliente = (id, name) => {
        const cliente = clientes.filter((cliente) => cliente.id === id && cliente.name === name);
        return cliente;
    }

    function handleClick() {
        // const cliente = findCliente(idCliente, search);
        // if (!cliente) {
        //     navigateTo('/servico');
        // } else {
        //     alert('Cliente não encontrado');
        // }
        if (idCliente === '123456' && search === 'Ada') {
            navigateTo('/servico');
        }
    }

    useEffect(() => {
        handleClick();
    }, []);
    return (
        <div>
            <Container>
                <label>
                    Nome do cliente:
                    <input
                        type="text"
                        name="name"
                        placeholder='Ada'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}/>
                </label>
                <label>
                    Id do cliente:
                    <input
                        type="text"
                        name="id"
                        placeholder='123456'
                        value={idCliente}
                        onChange={(e) => setIdCliente(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleClick} >
                    Procurar
                </button>

            </Container>
        </div>
    )
}
