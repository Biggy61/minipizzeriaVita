import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Poster from "../../components/Poster/Poster";
import Footer from "../../components/Footer/Footer";
import DeliveryPoster from "../../components/DeliveryPoster/DeliveryPoster";
import 'leaflet/dist/leaflet.css';  
import MenuPoster from "../../components/MenuPoster/MenuPoster";
import Location from "../../components/Location/Location";
import MapComponent from "../../components/MapComponent/MapComponent";
export default function Home(){
    return(
        <>
           <NavBar />
           <Poster />
           <MenuPoster />
           <Location />
           <DeliveryPoster />
             <MapComponent/>
         
          
           <Footer />
           
        </>
    )
}