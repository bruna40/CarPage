import { createContext, useState } from "react";
import Clientes from "../database/clientes.json";

export const CycleContext = createContext({});

export function CycleProvider({ children }) {
    const [clientes, setClientes] = useState(Clientes);
    const [search, setSearch] = useState("");
    const [idCliente, setIdCliente] = useState("");
    const [tempo, setTempo] = useState(0);
    const [selecionado, setSelecionado] = useState();
    const [ servico, setServico ] = useState([]);

    

    return (
        <CycleContext.Provider value={{
            clientes,
            setClientes,
            search,
            setSearch,
            idCliente,
            setIdCliente,
            tempo,
            setTempo,
            selecionado,
            setSelecionado,
            servico,
            setServico
        }}>
            {children}
        </CycleContext.Provider>
    )
}