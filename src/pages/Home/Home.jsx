import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Poster from "../../components/Poster/Poster";
import Footer from "../../components/Footer/Footer";

import 'leaflet/dist/leaflet.css';  
import Location from "../../components/Location/Location";
import MapComponent from "../../components/MapComponent/MapComponent";
export default function Home(){
    return(
        <>
           <NavBar />
           <Poster />
           <Location />
           {/* <MapComponent /> */}
           <Footer />
           
        </>
    )
}