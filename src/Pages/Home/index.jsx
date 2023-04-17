import { Container } from './style';
import Clientes from '../../database/clientes.json'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigateTo = useNavigate();
    const [clientes, setClientes] = useState(Clientes)
    const [search, setSearch] = useState('')
    const [searchId, setSearchId] = useState('')

    const handleClick = () => {
        const filtered = clientes.filter((cliente) => {
            return cliente.name === search && cliente.id === searchId
        })
        setClientes(filtered)
        navigateTo('/servico')
    }


    
    return (
        <div>
            <Container>
                <label>
                    Nome do cliente:
                    <input type="text" name="name" placeholder='Ada' />
                </label>
                <label>
                    Id do cliente:
                    <input type="text" name="id" placeholder='123456'/>
                </label>
                <button type="button" onClick={handleClick}>
                    Procurar
                </button>

            </Container>
        </div>
    )
}
