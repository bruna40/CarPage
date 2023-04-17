import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Container } from './style';

export function Header() {
    return (
        <Container>
            <img src={logo} width={150}/>

            <div>
                <p>Usuario</p>
                <NavLink to='/Home' title='Login'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/historico' title='Historico'>
                    <button>Historico</button>
                </NavLink>
                <NavLink to='/' title='Login'>
                    <button>Logout</button>
                </NavLink>
            </div>
        </Container>
    )
}