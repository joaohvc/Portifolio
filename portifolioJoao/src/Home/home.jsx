
import Header from "../componentes/header/header"
import Projeto1 from "../componentes/Projetos/Projetos"
import SobreMim from "../componentes/sobreMim/sobreMim"

function Home(){
    return(
        <div className="h-full-screen w-full-screen bg-blue-500 p-4 scroll-smooth">
            <Header/>
            <SobreMim/>
            <h1 className="text-3xl font-bold text-white ml-4 mt-5">PROJETOS</h1>
            <Projeto1/>
        </div>
    )
}

export default Home