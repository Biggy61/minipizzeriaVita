import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import MapComponent from '../../components/MapComponent/MapComponent'
import "./Rozvoz.css"
import { Box, Typography } from '@mui/material'
export default function Rozvoz() {
  
  return (
    <>
    <NavBar />
    <MapComponent width="100%" height="600"/>
    
    <Typography component="subtitle1" c sx={{
      fontSize: 30,
     
      display: "flex", 
      justifyContent: "center", 
    }}>  
Mladá Boleslav -
Rozvoz Zdarma <br />
Kosmonosy -
Rozvoz Zdarma<br />
Bradlec
Rozvoz - 50 Kč <br />
Bezděčín
Rozvoz - 30 Kč <br /> 
Podlázky
Rozvoz - 30 Kč <br />
Debř
Rozvoz - 30 Kč <br />
Jemníky
Rozvoz - 30 Kč <br /> 
Čejetice
Rozvoz - 40 Kč <br /> 
Dalovice
Rozvoz - 50 Kč <br /> 
Hrdlořezy
Rozvoz - 50 Kč <br /> 
Chrást
Rozvoz - 40 Kč <br /> 
Chudoplesy
Rozvoz - 50 Kč <br />
Josefův Důl
Rozvoz - 50 Kč <br />
Michalovice
Rozvoz - 50 Kč <br /> 
Plazy
Rozvoz - 50 Kč <br /> 
Podchlumí
Rozvoz - 30 Kč <br />
Podlázky
Rozvoz - 30 Kč <br />
Řepov
Rozvoz - 30 Kč <br />
Sahara
Rozvoz - 20 Kč </Typography>
 
    </>
  )
}
