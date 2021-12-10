import React , {useState, useEffect} from "react"
import  styled from "styled-components";
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';

import CardItem from "./CardItem";
import CountrySelect from "./CountrySelect";


// const Select=styled.h2``
 
const Select=styled.div`
display:flex;

justify-content:center;


@media(max-width:414){

}
`

const Container=styled.div`
 gap:2em;
 align-items:center
 
 
 @media(max-width:414){
    
}`

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
 
    const [countries, setCountries] =useState([]);
const {selectedCountry, setSelectedCountry} =useState("");
const [summary,setSummary]=useState({});


    useEffect(()=>{
     fetchCountries();
     fetchSummary()
 
   
   
   
   
   },[]
    )
   
   const fetchCountries=()=>{
     let requestOptions = {
       method: 'GET',
       redirect: 'follow'
     };

     
     
     fetch("https://api.covid19api.com/countries", requestOptions)
       .then(response => response.json())
       .then(result =>setCountries(result))
       .catch(error => console.log('error', error));
   }

   const fetchSummary=()=>{
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.covid19api.com/summary", requestOptions)
      .then(response => response.json())
      .then(result =>setSummary(result))
      .catch(error => console.log('error', error));
  }

  const countrySummary=(countryItem)=>{
      if(Object.keys(summary).length!=0){
          const filteredCountry=summary.Countries.filter(country=>country.Country===countryItem)
          console.log(filteredCountry)
      }
  }
   
   

    return(
<Container>



{countrySummary(selectedCountry)}
{console.log(selectedCountry)}

    <HeaderTittle>
   
        <Logo>
<CoronavirusTwoToneIcon style={{fontSize:"4rem" ,color:"red"}}/>
        </Logo>

       
        <Tittle><CovidSpan>COVID-19</CovidSpan> <TrackerSpan>TRACKER</TrackerSpan></Tittle>


  

    </HeaderTittle>


<Select>
<CountrySelect countries={countries} setSelectedCountry={setSelectedCountry}/>  
</Select>
<Summary>

<CardItem tittle="500,000" cases="confirmed cases" update="30" color="red" type="new cases" />

<CardItem tittle="200,000" cases="recovered cases" update="20" color="green" type="recovered" />

<CardItem tittle="100,000" cases="confirmed deaths" update="10" color="grey" type="deaths"/>
    
</Summary>
{console.log(selectedCountry)}

    </Container>
    )
}




export default Header;
