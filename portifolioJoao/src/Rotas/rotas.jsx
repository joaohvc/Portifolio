import { Route, Routes } from "react-router-dom"
import Home from "../Home/home"

function Rotas(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default Rotas