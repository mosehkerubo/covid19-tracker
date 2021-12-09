import React from "react"
import  styled from "styled-components";
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';

import CardItem from "./CardItem";
import CountrySelect from "./CountrySelect";


// const Select=styled.h2``
 
const Select=styled.div`
display:flex;

justify-content:center;
`

const Container=styled.div`
 gap:2em;
 align-items:center`

const Tittle=styled.h1`
font-family:Rubik Beastly;
font-weight:300;
`
const Logo=styled.div`
font-size:5rem;
align-items:center
`
const HeaderTittle=styled.div`
 display:flex;
  justify-content:center;
 align-items:center;


`
const Summary=styled.div`
display:flex;
justify-content:center;
flex-direction:row;
gap:2em;
`


const CovidSpan=styled.span`
color:green`

const TrackerSpan=styled.span`color:red`




 

const Header=()=>{
    return(
<Container>





    <HeaderTittle>
   
        <Logo>
<CoronavirusTwoToneIcon style={{fontSize:"4rem" ,color:"red"}}/>
        </Logo>

       
        <Tittle><CovidSpan>COVID-19</CovidSpan> <TrackerSpan>TRACKER</TrackerSpan></Tittle>


  

    </HeaderTittle>


<Select>
<CountrySelect/>  
</Select>
<Summary>

<CardItem tittle="500,000" cases="confirmed cases" update="30" color="red" type="new cases" />

<CardItem tittle="200,000" cases="recovered cases" update="20" color="green" type="recovered" />

<CardItem tittle="100,000" cases="confirmed deaths" update="10" color="grey" type="deaths"/>
    
</Summary>

    </Container>
    )
}




export default Header;
