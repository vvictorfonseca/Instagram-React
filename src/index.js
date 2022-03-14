import ReactDOM from "react-dom";

import Topo from "./Topo";
import Conteudo from "./Conteudo";
import Footer from "./Footeer";

export default function Insta () {
    return (
        <div>
        <Topo />
        <Conteudo />
        <Footer />
        </div>
    )
}



ReactDOM.render(<Insta />, document.querySelector(".root"));