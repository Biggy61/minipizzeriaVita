import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pizza from "./Pizza/Pizza";
import Home from "./Home/Home";
import Error from "./Error/Error";
import Prodejna from "./Prodejna/Prodejna";
export default function AppRoutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/pizza" element={<Pizza />}/>
                    <Route path="/prodejna" element={<Prodejna />}/>
                    <Route path="/*" element={<Error />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}