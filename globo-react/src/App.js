import styled from 'styled-components';

import Topo from "./componentes/Topo";
import Conteudo from "./componentes/Conteudo"

function App() {
    return (
        <Aplicativo>
            <Topo />
            <Conteudo />
        </Aplicativo>
    )
}

const Aplicativo = styled.div`
    box-sizing: border-box;
    padding: 10px 100px
`

export default App;