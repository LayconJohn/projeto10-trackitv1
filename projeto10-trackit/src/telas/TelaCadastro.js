import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { render } from 'react-dom'


export default function TelaCadastro() {
    //Estado
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [input, setInput] = useState(false);

    //logic
    let navigate = useNavigate();

    function submitCadastro(event){
        setInput(true);
        event.preventDefault();
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: nome,
            image: foto,
            password: senha
        })
        promisse
            .then((response) => {
            console.log(response.data);
            setInput(true);
            navigate("/");
            })
            .catch((err) => {alert("Erro no Cadastro. tente novamente")})


    }
    //render
    return (
        <Tela>
            <Logo>
                <div>
                    <div className='verde-inicio'></div>
                    <div className='vermelho'></div>
                    <div className='verde-final'></div>
                </div>
                <h1>TrackIt</h1>
            </Logo>
            <Forms>
                <form>
                    <input 
                        type={"email"}
                        placeholder="Email"
                        value={email}
                        disabled={input}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type={"password"}
                        placeholder="Senha"
                        value={senha}
                        disabled={input}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <input 
                        type={"text"}
                        placeholder="Nome"
                        value={nome}
                        disabled={input}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input 
                        type={"url"}
                        placeholder="Foto"
                        value={foto}
                        disabled={input}
                        onChange={(e) => setFoto(e.target.value)}
                    />
                    <button onClick={(event) => submitCadastro(event)}>Cadastrar</button>
                </form>
                <Link to={"/"}>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </Forms>
        </Tela>

    )
}

const Tela = styled.div`
    width: 100%;
    height: 100%;
    min-height: 667px;
    box-sizing: border-box;

`

const Logo = styled.div`
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 68px;
    margin-bottom: 26px;

    div {
        display: flex;
        align-items: flex-end;
    }

    .verde-inicio {
        width: 18px;
        height: 22px;
        background-color: #8FC549;
    }

    .vermelho {
        width: 18px;
        height: 42px;
        background-color: #E75766;
    }

    .verde-final {
        width: 18px;
        height: 64px;
        background-color: #8FC549;
    }

    h1 {
        font-family: Playball;
        font-size: 69px;
        text-align: center;
        color: #126BA5;
    }
`


const Forms = styled.div`

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 303px;
        height: 45px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-family: Lexend Deca;
        font-size: 20px;
        color: rgba(219, 219, 219, 0.9);

        margin: 6px 0px 6px 0px;
    }
    
    button {
        width: 303px;
        height: 45px;

        border: none;
        border-radius: 5px;
        padding-left: 11px;

        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 20px;
        font-family: Lexend Deca;
    }

    p {
        font-size: 14px;
        color: #52B6FF;
        font-family: Lexend Deca;
        text-align: center;
    }
`