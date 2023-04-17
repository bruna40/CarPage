import { NavLink } from "react-router-dom";
import { Container, Form } from "./style";

export function Login() {


    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <label htmlFor="user">
                    Usuário:
                    <input type="text" id="user" placeholder="User" />
                </label>
                <label htmlFor="password">
                    Senha:
                    <input type="password" id="password" placeholder="**********" />
                </label>
                
                <NavLink to='/home' title="Home">
                    <button type="submit">Login</button>
                </NavLink>
            </Form>
        </Container>
    )
}
