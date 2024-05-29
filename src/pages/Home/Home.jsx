import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Poster from "../../components/Poster/Poster";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Map/Map";

export default function Home(){
    return(
        <>
           <NavBar />
           <Map />
           <Poster />
           <Footer />
           
        </>
    )
}