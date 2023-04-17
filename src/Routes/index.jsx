import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Historico } from '../Pages/Historico';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/' element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/historico" element={<Historico />} />
            </Route>

        </Routes>
    )
}

export default Router;