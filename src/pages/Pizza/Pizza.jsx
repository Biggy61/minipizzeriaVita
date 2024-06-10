import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Pizza_cards from "../../components/Pizza_cards/Pizza_cards";
import "./Pizza.css";
import Grid from '@mui/material/Grid';
import PageHeading from "../../components/PageHeading/PageHeading";

export default function Pizza() {
  return (
    <>
      <NavBar />
      <PageHeading pageH1="Pizza - Nabídka"/>


{/* 
       <Pizza_cards name="quattro formaggi" popis="super" price="230Kc"/>
       <Pizza_cards name="dřevorubecká" popis="super" price="240Kc"/>
       <Pizza_cards name="sýrová" popis="super" price="220Kc"/> */}

{/* nebo smazat collumspacing a dat ml */}
  
      <Grid  display="flex" justifyContent="center" alignItems="center" className="" mt={0}  container rowSpacing={10} columnSpacing={{ xs: 1 , sm: 2, md: 5 }}>
      
        <Grid item xs={6} md={4} lg={2} >
        <Pizza_cards name="1. Margherita" popis="rajčatový protlak, sýr eidam" price="210"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="2. Vita" popis="rajčatový protlak, sýr, žampiony, slanina, olivy" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="3. Fantasia" popis="rajčatový protlak, sýr, salám, cibule, kukuřice" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="4. Sýrová" popis="rajčatový protlak, sýr eidam, niva, hermelín" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="5. Capricciosa" popis="rajčatový protlak, sýr, šunka, žampiony" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="6. Vegetariana" popis="rajčatový protlak, sýr, čerstvé žampiony, kukuřice" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="7. Hawai" popis="rajčatový protlak, sýr, šunka, ananas" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="8. Olivová" popis="rajčatový protlak, sýr, olivy" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="9. Špenátová" popis="rajčatový protlak, sýr, špenát" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="10. Šunková" popis="rajčatový protlak, sýr, šunka" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="11. Tuňáková" popis="rajčatový protlak, sýr, tuňák" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="12. Salámová" popis="rajčatový protlak, sýr, salám" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="13. Salám + Cibule" popis="rajčatový protlak, sýr, salám, cibule" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="14. Salám + Kukuřice" popis="rajčatový protlak, sýr, olivy" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="15. Dřevorubecká" popis="rajčatový protlak, sýr, anglická slanina" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="16. Ďábelská" popis="rajčatový protlak, sýr, paprikový salám" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="17. Mariana" popis="rajčatový protlak, sýr, cibule, česnek" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="18. Quattro formaggi" popis="4 druhy sýra, smetana" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="19. Torino" popis="rajčatový protlak, sýr, šunka, kukuřice" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="20. Verona" popis="smetana, sýr, šunka, brokolice" price="230"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="21. Pollo" popis="smetana, sýr, kuřecí maso, kukuřice" price="260"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="22. Mexikana" popis="rajčatový protlak, sýr, paprikový salám, feferony, kukuřice" price="260"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="23. Frutti de mare" popis="rajčatový protlak, sýr, mořské plody" price="280"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="24. Krevetová" popis="rajčatový protlak, sýr, krevety" price="280"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="25. Prosciutto" popis="rajčatový protlak, sýr, parmská šunka" price="280"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="26. Salmone" popis="rajčatový protlak, sýr, losos" price="280"/>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
        <Pizza_cards name="27. Bolognese" popis="rajčatový protlak, sýr, mleté maso, cibule" price="280"/>
        </Grid>

      </Grid>
      
    <Footer />
    </>
  );
}