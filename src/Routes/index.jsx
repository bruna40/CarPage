import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { Historico } from '../Pages/Historico';
import { Service } from '../Pages/Service';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path="/servico" element={<Service />} />
                <Route path="/home" element={<Home />} />
                <Route path="/historico" element={<Historico />} />
            </Route>

        </Routes>
    )
}

export default Router;