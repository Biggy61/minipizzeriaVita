import * as React from "react";
import "./Footer.css";
import Divider from '@mui/material/Divider';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MapComponent from "../MapComponent/MapComponent";
import { TableCell, TableContainer } from "@mui/material";



export default function Footer() {
    return (
        <>
       
      <Paper sx={{marginTop: '10px',
      width: '100%',
      position: 'absolute',
      backgroundColor: '#C7A27C',
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">
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
  
          
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              mb: 2,
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
            }}>Po</Typography>
              </Typography>
           
          </Box> 
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Štěpán Žďánský a Tadeáš Keller  <br />
              Copyright ©2024. [] Limited
            </Typography>
              
          </Box> 
        </Container>
      </Paper>

      </>
    );
  }