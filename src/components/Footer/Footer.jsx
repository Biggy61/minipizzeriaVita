import * as React from "react";
import "./Footer.css";
import Divider from '@mui/material/Divider';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MapComponent from "../MapComponent/MapComponent";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <>
       
      <Paper sx={{
      width: '100%',
      position: 'absolute',
      backgroundColor: '#C7A27C',
      }} component="footer" square variant="outlined">
    
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my:1
            }}
          > <Divider orientation="horizontal" flexItem />
              <div>
              <img height={100} src="src\img\vitaLogo_Red.png" alt="" />
              </div>
          </Box>
  
 
          <Container columnSpacing={{ xs: 2, sm: 2, md: 1 }}
            sx={{
              display: "flex", 
              justifyContent: "center",  
              mb: 2,
              width: "100%",
            }}
          >
            <Typography variant="caption" component="h2" color="initial"
             sx={{
              fontSize: 30,
            }}>
              Otevírací doba
              <Divider style={{ background: 'black' }} variant="middle" />
               <Typography variant="text" component="subtitle1" color="initial"
             sx={{
              fontSize: 20,
              
            }}>Po - Čt 10:00 - 20:00 <br />
               Pá 10:00 - 22:00 <br />
               So 11:00 - 22:00 <br />
               Ne 11:00 - 20:00

            </Typography>
              </Typography>
           
          </Container> 
          <Container sx={{
            display: "flex", 
            justifyContent: "center",  
            width: "100%",
          }}> 
         <a href="https://www.facebook.com/minipizzavita/?locale=cs_CZ"><FacebookIcon sx={{
              fontSize: 80,
            }}/></a>
            <a href="https://www.instagram.com/minipizzeriavita_mb/"><InstagramIcon sx={{
              fontSize: 80,
            }}/></a>
            </Container>
          <MapComponent  width="100%" height="400"/>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >

            <Typography variant="caption" color="initial" sx={{
               justifyContent: "center",
              display: "flex",
            }}>  
           
             <Divider style={{ background: 'black' }} variant="middle" />
              Štěpán Žďánský a Tadeáš Keller  <br />
                    Copyright ©2024. All rights reserved 
            </Typography>
              
          </Box> 

      </Paper>

      </>
    );
  }