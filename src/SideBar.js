export default function SideBar() {

    const infoUsuario = { foto: "/midias/catanacomics.1.png", user: "catacomics", nome: "Catana" }
    
    const infoSugestoes = [
        { url: "./midias/badvibesmemes 1.png", perfil: "bad.vibes.memes" },
        { url: "./midias/chibirdart 1.png", perfil: "chibirdart" },
        { url: "./midias/razoesparaacreditar 1.png", perfil: "adorable_animals" },
        { url: "./midias/adorableanimals 1.png", perfil: "adorable_animals" },
        { url: "./midias/smallcutecats 1.png", perfil: "smallcutecats" }
    ]

    return (
        <div class="caixa-direita">

            <Usuario foto={infoUsuario.foto} user={infoUsuario.user} nome={infoUsuario.nome} />

            <div class="sugestões">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>

            {infoSugestoes.map(elemento => <Sugestoes info={elemento} />)}

            <div class="texto">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma</p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}

function Usuario(props) {
    return (
        <div class="perfil-usuário">
            <img src={props.foto} />
            <div class="nomes">
                <p class="principal">{props.user}</p>
                <p>{props.nome}</p>
            </div>
        </div>

    )
}

function Sugestoes(props) {
    return (
        <div class="bad-vibes-memes">
            <img src={props.info.url} />
            <div class="legendas">
                <p>{props.info.perfil}</p>
                <p>Segue você</p>
            </div>
            <div class="seguir">
                <p>Seguir</p>
            </div>
        </div>
    )
}