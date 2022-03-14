export default function Feed() {

    const feed = [
        {fotoPerfil: "./midias/meowed.png", nome: "meowed", fotoFeed: "./midias/gato1.png", fotoCurtidas: "./midias/respondeai.png", descricao: ["curtido por,", "respondeai", "e", "outras", " 101.523 pessoas" ], legenda: ["meowed", "Os gatos estão de olho 👀"], verComentarios: "Ver todos os 580 comentários", comentario: ["vvictorfonseca", "Eu amo 🖤"], hora: "HÁ 6 HORAS"},
        {fotoPerfil: "./midias/barked2.png",nome: "barked", fotoFeed: "./midias/dog1.png", fotoCurtidas: "./midias/adorableanimals.2.png", descricao: ["Curtido por", "adorable_animals", "e", "outras", "92.159 pessoas"], legenda: ["barked", "Hora do descanso"], verComentarios: "Ver todos os 420 comentários", comentario: ["vvictorfonseca", "Eu amo 💛"], hora: "HÁ 12 HORAS"}
    ]


    return (
        <div className="feed">
            {feed.map (elemento => <Postagens info = {elemento} />)}
        </div>
    )
}

function Postagens(props) {
    return (
        <div class="caixa-esquerda-feed1">

            <div class="topo-feed1">
                <img class="fotos-feed" src={props.info.fotoPerfil} />
                <p class="titulo-feed">{props.info.nome}</p>
                <div class="icone-feed"><ion-icon name="ellipsis-horizontal"></ion-icon></div>
            </div>

            <div class="fotos-grandes-feed"><img src={props.info.fotoFeed} /></div>

            <div class="caixa-interações">
                <div class="icones-esquerda-interação">
                    <div class="coração"><ion-icon name="heart-outline"></ion-icon></div>
                    <div class="comentário"><ion-icon name="chatbubble-outline"></ion-icon></div>
                    <div class="mensagem"><ion-icon name="paper-plane-outline"></ion-icon></div>
                    <div class="icones-direita-interação"><ion-icon name="bookmark-outline"></ion-icon></div>
                </div>
            </div>
            {console.log(props.info)}
            <div class="caixa-curtidas"><img src={props.info.fotoCurtidas} />
            <p>{props.info.descricao[0]} <strong>{props.info.descricao[1]}</strong> {props.info.descricao[2]} <strong>{props.info.descricao[3]}</strong> {props.info.descricao[4]}</p>
            </div>

            <div class="legendas-publicação"><p><strong>{props.info.legenda[0]}</strong> {props.info.legenda[1]} </p></div>

            <p class="ver-comentários">{props.info.verComentarios}</p>

            <div class="comentários-publicação">
              <p><strong>{props.info.comentario[0]}</strong> {props.info.comentario[1]} </p> 
                <div class="curtida-comentário"><ion-icon name="heart-outline"></ion-icon></div>
            </div>

            <p class="horas-publicação">{props.info.hora}</p>

            <div class="separador-horizontal"></div>

            <div class="caixa-comentários">
                <div class="carinha-comentário"><ion-icon name="happy-outline"></ion-icon></div>
                <div class="cometário"><input class="form-itens" type="text" size="40px" placeholder="Adicione um comentário..." /></div>
                <div class="publicar"><p>Publicar</p></div>
            </div>
        </div>
    )
}