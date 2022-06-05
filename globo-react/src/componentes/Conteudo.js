import styled from 'styled-components';

import Noticia from './Noticia';

const noticiasPrincipais = [{imagem: "https://s3-alpha-sig.figma.com/img/db2c/feae/189c2f9a1e0742fc59d61151eab80997?Expires=1655078400&Signature=Z4bagwLpLm3xRrQevOaKz-VCT101fdQRssieTFRN~gFF9NNzn0MtCdC30CE5wMDqPEHXAUlphn1cMFUD5DFGOTFJ-nze~xgaUy2YeR-HvKG3teTyCg91wzk-RWH9jXTAtkNXmtw42F9zpZM0az8Z1YCN5M2iZqgiR-qZZCGzJDsu7ZaUd17BCAeEfl~N5cMV9KfGU8qCEjDhbLsN-gx8FmeQXsXrv~lFSknh1prBtJo-tWlxjdWdd5P~GIUbbnblK74KaRy5U~qIJ9OjtuIsgcP-Qz-d-RfodIcdjDDEUu6rck32qEirD5JLE0by7V89YgXs0waorkwl0id6FMbQbQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Além do presidente", subtitulo: "CPI deve pedir indiciamento de filhos de Bolsonaro", legenda: "A evangélicos, Bolsonaro diz ‘chorar sozinho em casa’", color: "#C4170C"},
 {imagem: "https://s3-alpha-sig.figma.com/img/4c0e/497d/d4cf84203fdb03fa5ef0db086049d547?Expires=1655078400&Signature=dBeoO9KtaHdGe2aca1xKXgR4QSq77BgOKiSK7nQkOVdsEVg2o8SjHdtYIViNiMRbmcoLAXJYlgVm9-ynr54bUgyjTc-~FUua-XC6FHfnTatHK63xIapxjr502Mpw7QUQQYg~mLeoklSZLy~cDk3IC7lb3jnZardOTjqeMER9GbrpmqSiZs09I~6uhqneomBz0OEZZRo0HbJX94TYhzk0av4K31WXbwq2YRYHjPo-ycSimRTprE25DcEBvNsnfBC6SsphkRv7lIbqmiJCwWxEvn6KNKpL9xMY6JRt5t95bHyFE0XnuCiBtqKD7mMVqBFGkMXu2L6PUEzZuvsmatSAyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Crimes na fronteira", subtitulo: "Triângulo amoroso vira chave em linha de investigação", legenda: "1ª de 7 mortes entre Brasil e Paraguai faz 1 semana", color: "#C4170C"},
 {imagem: "https://s3-alpha-sig.figma.com/img/cbe1/c760/bd14d2f7c8de9e706524601dd814242d?Expires=1655078400&Signature=YDwzYrMDTRnUNzoHwhzm5-noUDS0991JT0sJLbXqDPP41qSDu6MXIw5zCPYh1YsJAiBHKxqVCGVZ3zrrkDmJDWHCJlBAbNxGDopdHqiKI4jVtiONDUQQv8uIxDXNuzBmrNSAQ0ZMrEhAXuRrqgkPhf-YzWRVscgtBs25esYz2wplrLRFX9JZKyVnUIIknVq38ps9zMzMXlSTysx~QPrfgNaaI2LI-vzPjfwJKyNgDekCf3R6Ew6og3xLF12fJqJHnnzXjwTolXpYEazw8LWvsyqn441g40EA7xmqLI8yBqQoQ6rDAkU3KKkBqJKN2~WOH9PABnAS008OOFjems5cvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Reino Unido", subtitulo: "Parlamentar inglês é esfaqueado e morto em igreja", legenda: "Homem de 25 anos foi preso no local, diz polícia", color: "#C4170C"},
 {imagem: "", titulo: "Sabatina de Mendonça", subtitulo: "PGR é consultada sobre investigação contra Alcolumbre", legenda: "Aliados dizem que situação de Alcolumbre ‘está feia’", color: "#C4170C"},
 {imagem: "", titulo: "Negócio de R$ 5,2 bi", subtitulo: "Negócio de R$ 5,2 bi", legenda: "Lembre fusões e aquisições bilionárias recentes no país", color: "#C4170C"},
 {imagem: "", titulo: "Elo com caminhoneiros", subtitulo: "Podcast: ministro liga empresários a atos de 7/9; ouça", legenda: "Neto de Jango critica veto de Bolsonaro a tributo", color: "#C4170C"},
]

const noticiasSecundarias = [{imagem: "https://s3-alpha-sig.figma.com/img/f159/aa4f/7b188cbd11dbf51f2a0e9856786ccfa9?Expires=1655078400&Signature=bfwYmTsrX3To~e8N1xzQ~0q6RwTQBCfYPWwRDVBus08ham4UlC7reh0~9U~ghO5eWx6pfogAl1T0~F6gDw631yjeZMKaPFEEXTq7o5j2xI19miLU1rsmD4mpuVtl6gNHx9XraXVypkWQq7cXR-YjBP53dSezVIimPLo7wT3MzIiJjcN6W0sZztGhKJ6XFpGsM0EnnfYW5GqO3E3ZrYXp8FcluYg52udVRWmyFNE5dz8G38771RrSdL8rqf64o44f~SGBQ0tXIFy7gf0QKrXUtJo-qECGCqJsT3a7jtODmBFpRC14hF5oyvw6RF1oWVgwK5CxHYte2S0eC7hOEraaiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Espião estatístico", subtitulo: "Classificação do returno tem Palmeiras em último; veja as posições", legenda: "Crespo almoça com diretoria e deve se despedir no CT", color: "#16AE54"},
{imagem: "https://s3-alpha-sig.figma.com/img/8ac1/d1d0/b3a9ca73f9f46582e61cf6bb90dc9468?Expires=1655078400&Signature=YEBvJASdx8hv-QzVUg0CV5iQf2C0HOLUa7qd7jA5h03Tl9hi1vsvl~v-7zkm0tnV17iwwr8sDuvQfm~p-j86~MuQk66j-o3AKULlCCrbZwOe0cWWYAkKXTiiM20cs~2N6gI9sh30LeW9A7TeeI1a6M9r5pgobrETpEXp1lmMDih5aVBcOl6~JAAG7plSN-dnn58IjvZDuzeVpTjoUkdsqoefG0BtHY3gi2H2ftrgldsNlZ93~bMPkH6BWSby-~4298PGiilp~46fSH3B9u2BYHd0rI9YIYKze7-j4uwoD4lc~JAIFTwBqURPCECWZ6VILAnm8jMYJDYgC3WX8IRlHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Greve segue na Raposa", subtitulo: "Cruzeiro não viabiliza recurso para quitar atrasados", legenda: "", color: "#16AE54"}, 
{imagem: "https://s3-alpha-sig.figma.com/img/a839/dd36/a1ae42f2517dba27800bb2d8c8f08e76?Expires=1655078400&Signature=e4GP1mc6deNl-wklfdeuDqvKFoKgJoSEvNDnbeOwkyA1CNQekj0LizMpZlbIlTaPEwBGRJvm35is--IaGZ57QdJP2a6RxYyYmI9UretDrGmVowaS-W8lgSGWXDcAyBtp9b~eLBpRMXzx2rL0VKluQEI92znt2HfsaoWPPQKgFCOGXuv-esW4ScSsA69UdY9Np6vyDP2Oat65kmiJFmNpsBQOgAXFID~10Aovwkg7KrrQSavZJI6Og969EKSmy14I0UGuU-E2OeqBki-jMyMzVLODtXyW9XHCcwCgCzQem8lSzgKYDuO4sOZhU0hGV7t7DshgsipUaoXqbr0saSphNQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Férias e JH", subtitulo: "César Tralli se emociona na despedida do SP1", legenda:"", color: "#EC8006"},
 {imagem: "https://s3-alpha-sig.figma.com/img/e0db/8a64/d94bf16a2c329754a62e0d4007ccc26f?Expires=1655078400&Signature=WtvGr292a7Sx7eKTGK~~dY56I3xl6JlKjTwyiq-Dy7z-9wVGhsgnBrigMsmawGGmbYKqXdKX43v-1FT-F-hoDvFCiLjDRjumB30psoXW8d1gRayaMhkmV5GeA0~HSTQ47SjDsBGkIOWPLfYURYNYExSkL7tA5xlJlNRof7kH~e8ePzevbho74ToK3yLGkpBb5SHEHxdr3NeC51R0Q3oJcQGzfA-gDGp5rp6TFROqqPw62YSgJ5lxI5OTN0AWW~JwgLsxTGfqHGe1GdikNhDYiuTqTawJAdU-9y861ng2iE-f-YCIKd-k1LkZ5xWDKeqskEm3C5rXUtqDSQPr0tmeWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Verdades Sceretas 2", subtitulo: "Angel cruza a passarela poderosa; reveja desfiles", legenda: "Blanche terá dois relacionamentos", color: "#EC8006"},
 {imagem: "https://s3-alpha-sig.figma.com/img/9a96/6456/b6e112bd67ba5e2a97ce411236ce1db6?Expires=1655078400&Signature=egfFYWpRsK0REAu7ybYXrGLPd-3Ts1cjWKyQ6r7t3R80D0zPdvdXj0T2rTzNVxiYJyWobSboQDpMH8f8MsafhkmtwmMxfgOHlxMNq6ZByGlca279VLaqlZzJxVoPLIakr991K5ahKJt9P1rD9j0I3fbS8fOxvXy3jfOrk0wyWceSl85ZocyXw-mhPoqkO01ouDn552bJSGW-F5AH8svqnAawvvM82Ce5Bqp~RaepR4d1t6dSE1fFlHdwmmzmjrSTzBHmQCr9Xfk95FXASNZDLGPXlZwKqoUa~ayuRLYYJ2-9AO~HTys6TB0xqTlNXIP0AuFGT6KDWxOxegc4iNDacA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Campeonato francês", subtitulo: "Desfalcado, PSG recebe o Angers, 4º colocado", legenda: "", color: "#16AE54"},
 {imagem: "https://s3-alpha-sig.figma.com/img/0cd3/c5b6/db3d6caa400abda111989a54c1e64144?Expires=1655078400&Signature=b2S284PgvxNdK2qz6AB3H0-S589u6kt-VCEcnoAD47CQjhL0An3LibIqafrPEJ3Ogl1Qrjkqs8PTAP5j61dnkyA53tKGDgMZl28K0op4aDJ1hdMLHHS9SDCKEUAyHR9Oh3P5q~MClwQj0hjWiwGQFRQ4d6Ea1~Whbug25OGOQETLGtn~7L03oWFt~gy3Np4wPZGoBpfZwD8ZDzd1gvH07E2g-G64ay~3Vn8ePRPzw8aw8xHWDGzm~PqHNUt1pxBBm90WxWpf2c4QDOmFpm5gCFRQtFIyvvyWuh-~vfqheBKY~0Ep-eTzUxIobg5FU5ZLGTfbpVWS26ndCb9g7IvrQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", titulo: "Nos Tempos do Imperador", subtitulo: "Lota vai cair em golpe", legenda: "Teresa toma decisão radical", color: "#EC8006"},
 {imagem: "https://classic.exame.com/wp-content/uploads/2022/05/1653923301665309.jpg?quality=70&strip=info&w=1024", titulo: "Fim do caso Johnny Depp", subtitulo: "Johnny Depp irá receber 19 milhões na justiça", legenda: "", color: "#EC8006"},
 {imagem: "https://www.lance.com.br/files/article_main/uploads/2022/03/31/624605de25b59.jpeg", titulo: "Vitória da seleção", subtitulo: "Seleção brasileira golera Coréia em amistoso", legenda: "Confira os gols do jogo", color: "#16AE54"},
 {imagem: "https://s2.glbimg.com/bZJPGF3z5sKBM2qx9LQTikw7zc4=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/m/U/1UvLUASZAevRCb1TBygQ/the-batman-robert-pattinson.jpeg", titulo: "Filme do Batman", subtitulo: "Agora, em modelo de detetive e investigação, filme do Batman surpeender fãs", legenda: "", color: "#EC8006"},
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
                        color={noticia.color}
                    />
                })}       
                </CardNoticias>
            </Noticias>
            <Noticias>
                {noticiasSecundarias.map((noticia, index) => {
                    return <Noticia 
                        index={index}
                        imagem={noticia.imagem}
                        titulo={noticia.titulo}
                        subtitulo={noticia.subtitulo}
                        legenda={noticia.legenda}
                        color={noticia.color}
                    />
                })}
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
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;

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