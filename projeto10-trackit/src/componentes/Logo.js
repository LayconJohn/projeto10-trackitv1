import styled from 'styled-components';

export default function Logo() {
    return (
        <>
            <LogoEstilo>
                <div>
                    <div className='verde-inicio'></div>
                    <div className='vermelho'></div>
                    <div className='verde-final'></div>
                </div>
                <h1>TrackIt</h1>
            </LogoEstilo>
        </>
    )
}

const LogoEstilo = styled.div`
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
