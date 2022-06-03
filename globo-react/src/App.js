import styled from 'styled-components';

import Topo from "./componentes/Topo";

function App() {
    return (
        <Aplicativo>
            <Topo />
        </Aplicativo>
    )
}

const Aplicativo = styled.div`
    box-sizing: border-box;
`

export default App;