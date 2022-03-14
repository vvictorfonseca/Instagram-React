export default function Stories() {

    const stories = [
        { url: "midias/9gag 1.png", nome: "9gag" },
        { url: "midias/meowed 1.png", nome: "meowed" },
        { url: "midias/barked 1.png", nome: "barked" },
        { url: "midias/nathanwpylestrangeplanet 1.png", nome: "nathanwpyle..." },
        { url: "midias/wawawiwacomicsa 1.png", nome: "wawawiwac..." },
        { url: "midias/respondeai 1.png", nome: "respondeai" },
        { url: "midias/filomoderna 1.png", nome: "filomoderna" },
        { url: "./midias/memeriagourmet 1.png", nome: "memeriago" }
    ]

    return (
        <div class="caixa-superior-esquerda">

            {stories.map(elemento => <Storie info={elemento} />)}

            <div class="icone-barra-stories">
                <img src="./midias/Vector (1).png" />
            </div>
        </div>
    )
}

function Storie(props) {

    return (
        <div class="background-stories">
            <img class="background" src="./midias/stories_background.jpg" />
            <div class="stories">
                <img src={props.info.url} />
                <div class="nome-stories">
                    <p>{props.info.nome}</p>
                </div>
            </div>
        </div>
    )
}