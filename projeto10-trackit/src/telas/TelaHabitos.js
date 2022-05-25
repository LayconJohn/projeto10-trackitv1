import styled from 'styled-components';
import { useContext } from "react";

import UserContext from '../context/UserContext';

export default function TelaHabitos() {
    //Estado
    const {user, setUser} = useContext(UserContext);

    //render
    return (
        <Tela>
            <Header>
                <h1>TrackIt</h1>
                <div>
                    {/*<img src={user.image} alt={user.name}/>*/}
                </div>
            </Header>
            <Footer>
                <h5>Hábitos</h5>
                <BotaoHoje>Hoje</BotaoHoje>
                <h5>Histórico</h5>
            </Footer>
        </Tela>
    )
}

const Tela = styled.div`
    width: 375px;
    background-color: #E5E5E5;
`

const Header = styled.header`
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    
    h1 {
        font-size: 40px;
        color: #FFFFFF;
    }

    div {
        width: 51px;
        height: 51px;
        border-radius: 100px;
        background-color: red;
    }

    img {
        object-fit: cover;
    }

`

const Footer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    font-family: Lexend Deca;
    color: #52B6FF;
`;

const BotaoHoje = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52B6FF;
    position: fixed;
    bottom: 10px;
    left: 142px;
    color: #FFFFFF;
    font-weight: bold;
`;