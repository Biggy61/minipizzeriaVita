import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import Poster from "../../components/Poster/Poster";
import Footer from "../../components/Footer/Footer";
import MapComponent from "../../components/MapComponent/MapComponent";
import { Container, Box, Typography } from '@mui/material';
import 'leaflet/dist/leaflet.css';  
import Location from "../../components/Location/Location";
export default function Home(){
    return(
        <>
           <NavBar />
           <Poster />
           <Location />

           <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Map Application
        </Typography>
        <MapComponent />
      </Box>
    </Container>


           <Footer />
           
        </>
    )
}