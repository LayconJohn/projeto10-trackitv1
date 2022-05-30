import styled from 'styled-components';
import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import { BsTrash } from 'react-icons/bs';

import UserContext from '../context/UserContext';

const dias = [{id: "1", dia: "D", selecionado: false}, {id: "2", dia: "S", selecionado: false}, {id: "3", dia: "T", selecionado: false}, {id: "4", dia: "Q", selecionado: false}, {id: "5", dia: "Q", selecionado: false}, {id: "6", dia: "S", selecionado: false}, {id: "7", dia: "S", selecionado: false}];

function DiaDaSemana({dia, index, diasSelecionados, setDiasSelecionados}) {
    //Estado

    //logic
    function selecionarDia() {
        if (dia.selecionado) {
            dia.selecionado = false;   
            setDiasSelecionados([...diasSelecionados, dias.filter((item) => dia.id !== item.id)]);         
        } else {
            dia.selecionado = true;
            setDiasSelecionados([...diasSelecionados, dia.id])
        }
    }

    //render
    return (
        <div key={index} onClick={selecionarDia} className={dia.selecionado ? "selecionado" : ""}>{dia.dia}</div>

    )
}

export default function TelaHabitos() {
    //Estado
    const {user, setUser} = useContext(UserContext);
    const [criandoHabito, setCriandoHabito] = useState(false)
    const [nomeHabito, setNomeHabito] = useState("");
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [habito, setHabito] = useState([]);
    const [carregado, setCarregado] = useState(false)

    //logic

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        promisse
            .then((response) => {
            setHabito(response.data);
            })
            .catch((err) => {
                console.log(err.response.status);
            })

    }, [habito]);

    function criarHabito() {
        setCriandoHabito(true);
    }

    function cancelarHabito(){
        setCriandoHabito(false);
    }

    function salvarHabito(e) {
        e.preventDefault();
        setCarregado(true);
        const body = {
            name: nomeHabito,
            days: diasSelecionados
        };
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
        promisse
            .then((response) => {
            console.log(response.data);
            setNomeHabito("");
            setCarregado(false);
            setCriandoHabito(false);
            dias.map(dia => dia.selecionado = false)
            })
            .catch((err) => {

                if (body.name === "") {
                    alert("Preencha o nome do hábito")
                }
                if (body.days.length === 0) {
                    alert("Selecione pelo menos um dia")
                }
                console.log("Deu ruim")
                console.log(err.response.status)
            })
    };

    function deletarHabito(i) {
        const idHabito = habito[i].id
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        };
        const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`, config);
        promisse
            .then((response) => {
                console.log("Post excluído")
            });
    };

    //render
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
                <BotaoCriarHabito onClick={criarHabito}>+</BotaoCriarHabito>
            </MeusHabitos>
            {criandoHabito ? 
                <CriarHabitos>
                    <form>
                        <input 
                            type="text"
                            placeholder='Nome do Hábito'
                            value={nomeHabito}
                            disabled={carregado}
                            onChange={(e) => {setNomeHabito(e.target.value)}}
                        />
                        <DiasDaSemana habilitado={carregado}>
                            {dias.map((dia, index) => {
                                return <DiaDaSemana 
                                    dia={dia}
                                    index={index}
                                    diasSelecionados={diasSelecionados}
                                    setDiasSelecionados={setDiasSelecionados}
                                />
                            })}
                        </DiasDaSemana>
                        <SalvarHabito>
                            <p onClick={cancelarHabito}>Cancelar</p>
                            <button onClick={(e) => salvarHabito(e)} disabled={carregado} >Salvar</button>
                        </SalvarHabito>
                    </form>
                </CriarHabitos>
            : ""}
            {habito.length === 0 ? 
                <MensagemSemHabitoCriado>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </MensagemSemHabitoCriado>
            : 
                <ExibirHabitos>
                    {habito.map((h, index) => {
                        return <Habito key={index}>
                        <p>{h.name}</p>
                        <Icone onClick={(i) => {deletarHabito(index)}}> <BsTrash /> </Icone>  
                        <DiasDaSemana>
                            {["D", "S", "T", "Q", "Q", "S", "S"].map((dia, index) => {
                                return <div key={index} className={h.days.includes(index+1) ? "selecionado" : ""}>{dia}</div>
                            })}
                        </DiasDaSemana>
                    </Habito>
                    })}
                </ExibirHabitos>
            }
            <Footer>
                <Link to="/habitos"> <h5>Hábitos</h5> </Link> 
                <Link to="/hoje"> <BotaoHoje>Hoje</BotaoHoje> </Link>
                <Link to="/historico"> <h5>Histórico</h5> </Link> 
            </Footer>
        </Tela>
    )
}

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

    p{
        color: #666666;
        font-size: 20px;
    }
`;

const Icone = styled.div`
    width: 13px;
    height: 15px;
    color: #666666;
    position: absolute;
    top: 11px;
    right: 10px;
    padding-right: 10px;

    &:active{
        transform: scale(150%);
    }
`;

const MeusHabitos = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
    background-color: #FFFFFF;

    h3 {
        font-family: 'Lexend Deca';
        color: #126BA5;
        font-size: 22px;
    }
`;


const BotaoCriarHabito = styled.div`
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 30px;

    &:hover{
        opacity: 1.2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    }
`;

const CriarHabitos = styled.div`
    width: 340px;
    height: 180px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        font-weight: bold;
        padding-left: 12px;
        border-radius: 5px;

        color: #666666;
    }
`;

const DiasDaSemana = styled.div`
    width: 303px;
    display: flex;
    justify-content: flex-start;

    div {
        width: 30px;
        height: 30px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        margin-right: 12px;
        opacity: ${props => props.habilitado ? 0.3 : 1};
        pointer-events: ${props => props.habilitado ? "none" : "auto"};
        
        font-size: 20px;
        font-weight: bold;
        color: #DBDBDB;
    }

    div:active {
        transform: translateY(4px);
    }

    .selecionado {
        background-color: #CFCFCF;
        border: 1px solid #CFCFCF;
        color: #FFFFFF;
    }
`;

const SalvarHabito = styled.div`
    width: 303px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        color: #52B6FF;
        font-size: 16px; 
        margin-right: 22px;
        opacity: 0.7;
    }

    button {
        width: 84px;
        height: 36px;
        background-color: #52B6FF;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
    }

    p:hover {
        opacity: 120%;
    }

    button:active{
        transform: translateY(4px);
    }
`;

const MensagemSemHabitoCriado = styled.p`
    color: #666666;
    font-size: 18px;
    width: 338px;
    height: 74px;
    text-align: center;
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