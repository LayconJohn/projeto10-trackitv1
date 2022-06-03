import styled from 'styled-components';

const logos = [{nome: "g1", cor: "#C3170C"}, {nome: "oglobo", cor: "#1E4B9B"}, {nome: "valor", cor: "#006766"}, {nome: "ge", cor: "#07AA47"}, {nome: "cartola", cor: "#E3662B"}, {nome: "globoplay", cor: "#FB0735"}, {nome: "gshow", cor: "#EC7D00"} , {nome: "receitas", cor: "#A81D83"}]

export default function Menu() {
    return(
        <Main >
           {logos.map( (logo, index) => {
               return <LogoTexto cor={logo.cor} key={index} >{logo.nome}</LogoTexto>
           })}
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoTexto = styled.h4`
        font-size: 18px;
        font-weight: bold;
        margin: 22px 55px;
        color: ${props => props.cor};
`