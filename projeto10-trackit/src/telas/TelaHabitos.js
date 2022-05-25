import styled from 'styled-components';
import { useContext, useState } from "react";

import UserContext from '../context/UserContext';

const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

function DiaDaSemana({dia, index, diasSelecionados, setDiasSelecionados}) {
    //Estado
    const [selecionado, setSelecionado] = useState(false);

    //logic
    function selecionarDia() {
        setSelecionado(!selecionado)
        if (!diasSelecionados.includes(index + 1)) {
            setDiasSelecionados([...diasSelecionados, (index + 1)])
        }
    }

    //render
    return (
        <div key={index} onClick={selecionarDia} className={selecionado ? "selecionado" : ""}>{dia}</div>

    )
}

export default function TelaHabitos() {
    //Estado
    const {user, setUser} = useContext(UserContext);
    const [criandoHabito, setCriandoHabito] = useState(false)
    const [nomeHabito, setNomeHabito] = useState("");
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [habito, setHabito] = useState({
        id: "",
        name: nomeHabito,
        days: dias
    });

    //logic
    function criarHabito() {
        setCriandoHabito(true)
    }

    function cancelarHabito(){
        setCriandoHabito(false)
    }

    function salvarHabito(e) {
        e.preventDefault();
        console.log(diasSelecionados);
        
    }

    //render
    return (
        <Tela>
            <Header>
                <h1>TrackIt</h1>
                <div>
                    {/*<img src={user.image} alt={user.name}/>*/}
                </div>
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
                            onChange={(e) => {setNomeHabito(e.target.value)}}
                        />
                        <DiasDaSemana>
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
                            <button onClick={(e) => salvarHabito(e)}>Salvar</button>
                        </SalvarHabito>
                    </form>
                </CriarHabitos>
            : ""}
            <MensagemSemHabitoCriado>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </MensagemSemHabitoCriado>
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
        
        font-size: 20px;
        font-weight: bold;
        color: #DBDBDB;
    }

    div:active{
        transform: translateY(4px);
    }

    .selecionado{
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