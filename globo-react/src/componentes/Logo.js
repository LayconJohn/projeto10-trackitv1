import styled from 'styled-components';

export default function Logo() {
    return(
        <Imagem>
           <img src="https://s3-alpha-sig.figma.com/img/5dc7/ebf0/515afd36d42402ca2b51deaa997293c7?Expires=1655078400&Signature=Y1yS1SvcmqFx2oI7p9Z0nKHWBrThmhmsJauO-eB9n5FSq-fBuG3nlWcvcWUeQxhKrrelBfSo7EXwqY7SR~Y2Qyx0WGuZwruR0Q90A7-ntuUBvG5bSeiPTjX3vAi2Fc2tQk2k6rnD1Y52DIbLaj8x3HQ3lKhHzY1KKfH93SVKUvUjDL2pULVMwgerB~BfT1ba4~o5xa0QkZ02kgzXtRXHyYE0raP4Xsr5cK443GZmtJ~NKdbIJ571R1GEJUFiw3Dp8Z-RXU-dgeJrxZXJd32fT2bMAULyC2-bJDmcxjVq5hw2mj1kVuBq200sT9ROT05BlE33u-zGphr-W7TobJEY4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/> 
        </Imagem>
    )
}

const Imagem = styled.div`
    width: 170px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 170px;
        height: 40px;  
        cursor: pointer; 
    }

    img:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(27, 27, 27, .5);
    }
`