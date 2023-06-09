import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container } from './style';

export function Header() {
    return (
        <Container>
            <img src={logo} width={150}/>
            <div>
                <NavLink to='/' title='Login'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/historico' title='Historico'>
                    <button>Historico</button>
                </NavLink>
            </div>
        </Container>
    )
}