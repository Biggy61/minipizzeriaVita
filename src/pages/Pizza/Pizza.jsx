import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Pizza_cards from "../../components/Pizza_cards/Pizza_cards";
import "./Pizza.css";
import Grid from '@mui/material/Grid';
import HTextBackground from "../../components/HTextBackground/HTextBackground";


export default function Pizza() {
  return (
    <>
      <NavBar />
      <HTextBackground />


{/* 
       <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
       <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
       <Pizza_cards name="sýrová" popis="super" price="220Kc"/> */}

{/* nebo smazat collumspacing a dat ml */}
  
      <Grid className="pizza_grid" mt={10}  container rowSpacing={10} ml={10}>
      
        <Grid item xs={4} md={2} >
        <Pizza_cards img="./src/img/Margherita-scaled-removebg-preview.png" name="Margherita" popis="rajčatový protlak, sýr eidam" price="210Kc"/>
        </Grid>
        <Grid item xs={6} md={2}>
        <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
        </Grid>
        <Grid item xs={6} md={2}>
        <Pizza_cards name="sýrová" popis="super" price="220Kc"/>
        </Grid>
        <Grid item xs={6} md={2}>
        <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
        </Grid>
      </Grid>
      
    <Footer />
    </>
  );
}