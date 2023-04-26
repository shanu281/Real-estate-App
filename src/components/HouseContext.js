import React, { createContext, useEffect, useState } from 'react';
import {housesData} from "../data"

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)")
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState("Property Type (any)")
  const [price, setPrice] = useState("Price Range (Any)")
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const allCountries = houses.map(house => {
      return house.country
    })
    const uniqueCountries = ["location (any)", ...new Set(allCountries)]
    setCountries(uniqueCountries)
   
  }, [])

  useEffect(() => {
    const allProperties = houses.map(house => {
      return house.type
    })
    const uniqueProperties = ["location (any)", ...new Set(allProperties)]
    setProperties(uniqueProperties)
    
  }, [])

  const handleClick = () => {
    setLoading(true)
    const isDefault = (str) => {
      return str.split(" ").includes("(any)")
    }
    const minPrice = parseInt(price.split(" ")[0])
    const maxPrice = parseInt(price.split(" ")[2])
  
     const newHouses = housesData.filter((house) => {
      
      const housePrice = parseInt(house.price);
       if(
        house.country === country && 
          house.type === property &&
             housePrice >= minPrice 
              // housePrice <= maxPrice
             ) {
              return house;
             }
        // if all the values are deafault
        if(isDefault(country) && isDefault(property) && isDefault(price)){
          return house;
        }
        //if country is not default
        if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
        }
         //if property is not default
         if(isDefault(country) && !isDefault(property) && isDefault(price)){
          return house.type === property;
          }
           //if price is not default
        if(isDefault(country) && isDefault(property) && !isDefault(price)){
           if(housePrice >= minPrice && housePrice <= maxPrice ){
          return house;
          }
        }
         //if country and property is not default
         if(!isDefault(country) && !isDefault(property) && isDefault(price)){
          return house.country === country && house.type === property;
          }
           //if country and price is not default
        if(!isDefault(country) && isDefault(property) && !isDefault(price)){
          if(housePrice >= minPrice && housePrice <= maxPrice)
          return house.country === country;
          }
           //if property and price is not default
        if(!isDefault(country) && !isDefault(property) && !isDefault(price)){
          if(housePrice >= minPrice && housePrice <= maxPrice){

          return house.type === property;
          }
        }


    });
    setTimeout(() => {
      return (
         newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false)
      )
    }, 1000)
    
    console.log(newHouses)
  }
  return (
  <HouseContext.Provider value={{
    country,setCountry, countries, setCountries, property, setProperty, properties, setProperties, price, setPrice, houses,setHouses, loading ,setLoading, handleClick
  }}>
    {children}
  </HouseContext.Provider>
  )
};

export default HouseContextProvider;
