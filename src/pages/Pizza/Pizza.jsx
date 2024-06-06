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
  
      <Grid  display="flex" justifyContent="center" alignItems="center" className="" mt={10}  container rowSpacing={10} columnSpacing={{ xs: 1 , sm: 2, md: 5 }}>
      
        <Grid item xs={6} md={4} lg={2} >
        <Pizza_cards name="1. Margherita" popis="rajčatový protlak, sýr eidam" price="210Kc"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="sýrová" popis="super" price="220Kc"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
        </Grid>
      </Grid>
      
    <Footer />
    </>
  );
}