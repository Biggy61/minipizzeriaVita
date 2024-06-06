




import * as React from 'react';
import Card from '@mui/material/Card';
import "./Pizza_cards.css";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Pizza_cards(props) {
 
  return (
    <>
    <Card sx={{ maxWidth: 300, maxHeight: 450}}>
 <CardActionArea>
   <CardContent> 
   
          {/* <img src={props.img} sx={{ maxWidth:150, maxHeight:150}} /> */}
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
            <hr class="separator" />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.popis}
          </Typography>
          <Typography variant='h6' >
        
                 {props.price}
          </Typography>
         
        </CardContent> </CardActionArea>
    </Card>
  
    </>
  );

}




