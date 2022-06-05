import styled from 'styled-components';

import Noticia from './Noticia';

const noticiasPrincipais = [{imagem: "https://s3-alpha-sig.figma.com/img/db2c/feae/189c2f9a1e0742fc59d61151eab80997?Expires=1655078400&Signature=Z4bagwLpLm3xRrQevOaKz-VCT101fdQRssieTFRN~gFF9NNzn0MtCdC30CE5wMDqPEHXAUlphn1cMFUD5DFGOTFJ-nze~xgaUy2YeR-HvKG3teTyCg91wzk-RWH9jXTAtkNXmtw42F9zpZM0az8Z1YCN5M2iZqgiR-qZZCGzJDsu7ZaUd17BCAeEfl~N5cMV9KfGU8qCEjDhbLsN-gx8FmeQXsXrv~lFSknh1prBtJo-tWlxjdWdd5P~GIUbbnblK74KaRy5U~qIJ9OjtuIsgcP-Qz-d-RfodIcdjDDEUu6rck32qEirD5JLE0by7V89YgXs0waorkwl0id6FMbQbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Além do presidente", subtitulo: "CPI deve pedir indiciamento de filhos de Bolsonaro", legenda: "A evangélicos, Bolsonaro diz ‘chorar sozinho em casa’"},
 {imagem: "https://s3-alpha-sig.figma.com/img/4c0e/497d/d4cf84203fdb03fa5ef0db086049d547?Expires=1655078400&Signature=dBeoO9KtaHdGe2aca1xKXgR4QSq77BgOKiSK7nQkOVdsEVg2o8SjHdtYIViNiMRbmcoLAXJYlgVm9-ynr54bUgyjTc-~FUua-XC6FHfnTatHK63xIapxjr502Mpw7QUQQYg~mLeoklSZLy~cDk3IC7lb3jnZardOTjqeMER9GbrpmqSiZs09I~6uhqneomBz0OEZZRo0HbJX94TYhzk0av4K31WXbwq2YRYHjPo-ycSimRTprE25DcEBvNsnfBC6SsphkRv7lIbqmiJCwWxEvn6KNKpL9xMY6JRt5t95bHyFE0XnuCiBtqKD7mMVqBFGkMXu2L6PUEzZuvsmatSAyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Crimes na fronteira", subtitulo: "Triângulo amoroso vira chave em linha de investigação", legenda: "1ª de 7 mortes entre Brasil e Paraguai faz 1 semana"},
 {imagem: "https://s3-alpha-sig.figma.com/img/cbe1/c760/bd14d2f7c8de9e706524601dd814242d?Expires=1655078400&Signature=YDwzYrMDTRnUNzoHwhzm5-noUDS0991JT0sJLbXqDPP41qSDu6MXIw5zCPYh1YsJAiBHKxqVCGVZ3zrrkDmJDWHCJlBAbNxGDopdHqiKI4jVtiONDUQQv8uIxDXNuzBmrNSAQ0ZMrEhAXuRrqgkPhf-YzWRVscgtBs25esYz2wplrLRFX9JZKyVnUIIknVq38ps9zMzMXlSTysx~QPrfgNaaI2LI-vzPjfwJKyNgDekCf3R6Ew6og3xLF12fJqJHnnzXjwTolXpYEazw8LWvsyqn441g40EA7xmqLI8yBqQoQ6rDAkU3KKkBqJKN2~WOH9PABnAS008OOFjems5cvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Reino Unido", subtitulo: "Parlamentar inglês é esfaqueado e morto em igreja", legenda: "Homem de 25 anos foi preso no local, diz polícia"},
 {imagem: "", titulo: "Sabatina de Mendonça", subtitulo: "PGR é consultada sobre investigação contra Alcolumbre", legenda: "Aliados dizem que situação de Alcolumbre ‘está feia’"},
 {imagem: "", titulo: "Negócio de R$ 5,2 bi", subtitulo: "Negócio de R$ 5,2 bi", legenda: "Lembre fusões e aquisições bilionárias recentes no país"},
 {imagem: "", titulo: "Elo com caminhoneiros", subtitulo: "Podcast: ministro liga empresários a atos de 7/9; ouça", legenda: "Neto de Jango critica veto de Bolsonaro a tributo"},
]

export default function Conteudo() {
    return (
        <Conteiner>
            <Noticias>
                <h3>Vacinados entrarão nos EUA sem quarentena a partir de 8 de novembro</h3>
                <p>Ministros ‘lavam as mãos’ sobre Bolsonaro não se vacinar, relata blog</p>
                <p>Bandeiras em frente ao Congresso lembram 600 mil brasileiros mortos</p>
                <CardNoticias>
                {noticiasPrincipais.map((noticia, index) => {
                    return <Noticia 
                        index={index}
                        imagem={noticia.imagem}
                        titulo={noticia.titulo}
                        subtitulo={noticia.subtitulo}
                        legenda={noticia.legenda}
                    />
                })}       
                </CardNoticias>
            </Noticias>
            <Noticias>


            </Noticias>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    display: flex;
`;

const CardNoticias = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Noticias = styled.div`
    width: 50%;

   h3 {
       font-weight: bold;
       font-size: 52px;
       color: #C4160C;
       word-wrap: break-word;
       cursor: pointer;
   } 

   h3:active{
       font-size: 56px;
   }

   p {
       font-size: 18px;
       color: #303134;
       word-wrap: break-word;
       cursor: pointer;
   }

   p:active{
       font-size:22px
   }
`;