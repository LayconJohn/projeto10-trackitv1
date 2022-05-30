import styled from 'styled-components';

export default function TelaHistorico() {
    return (
        <Tela>  
        <Header>
            <h1>TrackIt</h1>
            <Imagem>
                {<img src={user.image} alt={user.name}/>}
            </Imagem>
        </Header>
        <MeusHabitos>
            <h3>Histórico</h3>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </MeusHabitos>
        <Footer>
            <Link to="/habitos"> <h5>Hábitos</h5> </Link> 
            <Link to="/hoje"> <BotaoHoje>Hoje</BotaoHoje> </Link>
            <Link to="/historico"><h5>Histórico</h5></Link> 
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