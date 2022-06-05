import styled from 'styled-components';

export default function Noticia({index, imagem, titulo, subtitulo, legenda, color}) {
    return (
        <Card key={index}>
           {imagem === "" ? "" : <Imagem src={imagem} />}
           <Titulo color={color}>{titulo}</Titulo> 
           <SubTitulo>{subtitulo}</SubTitulo>
           <Legenda>{legenda}</Legenda>
        </Card>
    )
}

const Card = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: 5px 24px;
`;

const Imagem = styled.img`
    width: 200px;
    height: 100px;
    object-fit: cover;
    border-radius: 12px;
    cursor: pointer;

    &:active {
        width: 202px;
        height: 102px;
    }
`;

const Titulo = styled.span`
    font-size: 14px;
    color: ${props => props.color};
    margin: 6px 0px;
    cursor: pointer;

    &:active {
        font-size: 16px;
    }
`;

const SubTitulo = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #2F3134;
    word-wrap: break-word;
    margin: 8px 0px;
    cursor: pointer;

    &:active {
        font-size: 16px;
    }
`;

const Legenda = styled.span`
    font-size: 14px;
    color: #2F3134;
    word-wrap: break-word;
    margin: 5px 0px;
    cursor: pointer;

    &:active {
        font-size: 16px;
    }
`;