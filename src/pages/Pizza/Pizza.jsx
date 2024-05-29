
import NavBar from "../../components/NavBar/NavBar";
import Pizza_cards from "../../components/Pizza_cards/Pizza_cards";
import "./Pizza.css";
import Grid from '@mui/material/Grid';
export default function Pizza() {
  return (
    <>
      <NavBar />
{/* 
       <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
       <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
       <Pizza_cards name="sýrová" popis="super" price="220Kc"/> */}

{/* nebo smazat collumspacing a dat ml */}
      <Grid className="pizza_grid" mt={10}  container rowSpacing={10} columnSpacing={{ xs: 10 , sm: 10, md: 10 }}>
      
        <Grid item xs={6} md={4} >
        <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Pizza_cards name="sýrová" popis="super" price="220Kc"/>
        </Grid>
        <Grid item xs={6} md={4}>
        <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
        </Grid>
      </Grid>

    </>
  );
}10