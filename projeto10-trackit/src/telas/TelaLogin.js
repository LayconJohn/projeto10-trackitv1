import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useContext } from "react";

import UserContext from '../context/UserContext';

import Logo from "../componentes/Logo";

export default function TelaLogin() {
    //Estado
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [input, setInput] = useState(false);
    
    const {token, setToken} = useContext(UserContext);

    //logic
    let navigate = useNavigate();

    function submitLogin(event) {
        event.preventDefault();
        setInput(true)

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
                email: email,
                password: senha
        })
        promisse
            .then((response) => {
                setToken(response.data.token);
                setInput(false)
            })
            .catch((err) => {
                alert("Dados de Login incorretos. Preencha novamente!")
            })
        navigate("/habitos")
    }

    //render
    return (
        <>
            <Logo />
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
                        <button onClick={(event) => submitLogin(event)} disabled={input} >Entrar</button>
                    </form>
                    <Link to={"/cadastro"}>
                        <p>Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </Forms>
        </>
    )
}

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
