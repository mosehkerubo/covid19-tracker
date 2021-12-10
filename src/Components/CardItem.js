import React from "react";


import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
// import { Title } from "@mui/icons-material";




const CardItem=({tittle,update,cases,color,type})=>{
    return(
      
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize:"2rem"}} color={{color}} gutterBottom>
         {tittle}
        </Typography>
        <Typography sx={{color:color,fontSize:"3rem",fontWeight:"300"}} >
          {cases}
        </Typography>
        <Typography sx={{ mb: 1.5, color:color}} >
       +  {update} {type}
        </Typography>
       
      </CardContent>
     
        
     
    </Card>
    )
}

export default CardItem;