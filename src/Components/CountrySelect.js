import React,{useState,useEffect} from "react"


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const CountrySelect=()=>{
    
const [country, setCountry] = React.useState('');


 useEffect(()=>{
  fetchCountries()
  
country.map(countries)=>{
console.log(country)
}




}
)

const fetchCountries=()=>{
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.covid19api.com/countries", requestOptions)
    .then(response => response.text())
    .then(result =>setCountry(result))
    .catch(error => console.log('error', error));
}

fetchCountries();

const handleChange = (event) => {
  setCountry(event.target.value);
};



return (
  <div>
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={country}
        onChange={handleChange}
        label="country"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem country={10}>kenya</MenuItem>
        <MenuItem country={20}>uganda</MenuItem>
        <MenuItem country={30}>tz</MenuItem>
      </Select>
    </FormControl>
    
  </div>
);
}



export default CountrySelect;