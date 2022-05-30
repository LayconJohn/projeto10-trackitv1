import styled from 'styled-components';
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import { BsCheckSquareFill } from 'react-icons/bs';

import UserContext from '../context/UserContext';


function HabitoIndividual({habito, user}) {
    // Estado

    // Logic

    function concluirHabito() {
        console.log(habito.id);
        const habitoId = habito.id;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };
        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitoId}/check`, null ,config);
        promisse
            .then((response) => {
                console.log("Hábito marcado com sucesso")
            })
            .catch((err) => {
                if (err.response.data === 400) {
                    alert("Erro ao finalizar hábito. Tente relogar novamente.")
                } else {
                    console.log("Erro", err.response.status)
                }
            })
    }

    //render
    return (
            <Habito key={habito.id}>
                <h5>{habito.name}</h5>
                <p>Sequência atual: {habito.currentSequence} dias 
                    <br />Seu recorde: {habito.highestSequence} dias
                </p>
                <div onClick={concluirHabito}> <Icone concluido={habito.done}/> </div>
                
            </Habito>
    )
}

export default function TelaHoje() {
    //Estado
    const {user, setUser} = useContext(UserContext);
    const [habitoConcluido, setHabitoConcluido] = useState(false);
    const [habitosHoje, setHabitosHoje] = useState([]);
    
    //Logic
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promisse
            .then((response) => {
                setHabitosHoje(response.data)
            })
            .catch((err) => {
                console.log("Deu erro" + err.response.status)
            })
    }, [habitosHoje])

    //Render
    return (
        <Tela>  
            <Header>
                <h1>TrackIt</h1>
                <Imagem>
                    {<img src={user.image} alt={user.name}/>}
                </Imagem>
            </Header>
            <MeusHabitos>
                <h3>Meus hábitos</h3>
                <HabitosConcluidos concluido={habitoConcluido}>
                    {habitoConcluido ? "67% dos hábitos concluídos" : "Nenhum hábito concluído ainda"}
                </HabitosConcluidos>
            </MeusHabitos>
            <ExibirHabitos>
                {habitosHoje.map((habito, index) => {
                    return <HabitoIndividual
                        habito={habito}
                        user={user}                   
                    />
                })}
                   
            </ExibirHabitos>
            <Footer>
                <Link to="/habitos"> <h5>Hábitos</h5> </Link> 
                <Link to="/hoje"> <BotaoHoje>Hoje</BotaoHoje> </Link>
                <Link to="/historico"><h5>Histórico</h5></Link> 
            </Footer>
        </Tela>
    )
};

const Tela = styled.div`
    width: 375px;
`;

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
    z-index: 1;
    
    h1 {
        font-size: 40px;
        color: #FFFFFF;
    }
`;

const Imagem = styled.div`
    img {
        width: 51px;
        height: 51px;
        border-radius: 100px;   
        object-fit: cover;
        object-fit: cover;
    }
`;

const MeusHabitos = styled.div`
    width: 100%;
    margin-top: 100px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 8px;

    h3 {
        font-family: 'Lexend Deca';
        color: #126BA5;
        font-size: 22px;
    }
`;

const HabitosConcluidos = styled.h5`
    font-size: 18px;
    color: ${props => props.concluido ? "#8FC549" : "#BABABA"};
`;

const ExibirHabitos = styled.div`
    margin: 0 auto;
    box-sizing: border-box;
    overflow-y: scroll;
    padding-bottom: 90px;
`;

const Habito = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    position: relative;
    padding: 15px;

    h5 {
        font-size: 20px;
        color: #666666
    }

    p{
        font-size: 13px;
        color: #666666
    }
`;

const Icone = styled(BsCheckSquareFill)`
    position: absolute;
    top: 13px;
    right: 13px;
    padding-right: 10px;
    width: 69px;
    height: 69px;
    background-color: #FFFFFF;
    color: ${props => props.concluido ? "#8FC549" : "#EBEBEB"};

    &:active{
        transform: scale(0.7);
    }
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
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);

    &:active {
        transform: translateZ(4px);
    }
`;

const Footer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    font-family: 'Lexend Deca';
    color: #52B6FF;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.35);
`;