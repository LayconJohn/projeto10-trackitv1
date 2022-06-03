import styled from 'styled-components';

import Logo  from './Logo';
import Menu from './Menu';

export default function Topo() {
    return (
        <Header>
            <Logo />
            <Menu />
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`