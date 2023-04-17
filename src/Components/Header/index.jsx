import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container } from './style';

export function Header() {
    return (
        <Container>
            <img src={logo} width={150}/>
            <div>
                <NavLink to='/Home' title='Login'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/servico' title='Service'>
                    <button>Serviço</button>
                </NavLink>
                <NavLink to='/historico' title='Historico'>
                    <button>Historico</button>
                </NavLink>
            </div>
        </Container>
    )
}