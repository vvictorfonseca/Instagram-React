export default function Topo () {
    return (

<div className="barra-topo">
    <div className="logo-esquerda">
        <div className="logo-insta">
        <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="separador-vertical"></div>
        <div className="foto-instagram">
        <img src="./midias/logo.1.png" />
        </div>
    </div>  
    <div className="barra-pesquisa">
        <div className="icon-pesquisar">
            <ion-icon name="search-outline"></ion-icon>
        </div>
        <p className="pesquisar">Pesquisar</p>
    </div> 
    <div className="icones-direita">
        <div className="paper-plane">
        <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div className="compass">
        <ion-icon name="compass-outline"></ion-icon>
        </div>
        <div className="heart-topo">
        <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div className="person-topo">
        <ion-icon name="person-outline"></ion-icon>
        </div>
    </div>
</div>
    )
}

