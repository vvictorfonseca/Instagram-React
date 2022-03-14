import Stories from "./Stories";
import Feed from "./Feed";
import SideBar from "./SideBar";


export default function Conteudo () {
    return  (
        <div class="conteudo">
            <div class="barras-esquerda">
                <Stories />
                <Feed />
            </div>
                <SideBar />
        </div>
    )
}