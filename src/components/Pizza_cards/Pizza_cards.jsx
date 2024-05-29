import * as React from 'react';
import Card from '@mui/material/Card';
import "./Pizza_cards.css";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
export default function Pizza_cards(props) {
  return (
    <>
    <Card>
  
        <img className='pizzaCards_img' src='src\img\pizza.png'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.popis}
          </Typography>
          <Typography variant='h2' >
            <CardActionArea>
                 {props.price}
            </CardActionArea>
         
          </Typography>
        </CardContent>
    </Card>
    </>
  );
}
