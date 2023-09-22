import React from "react"
import {RestaurantsCards} from "./RestaurantCard"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer";
import { API } from "../constants";
import {ErrorPage} from "./Error"
import { Link } from "react-router-dom";
import { locationAPI } from "../constants";
// 2types of routing in web apps
// Client Side routing:-No request to server is made(SINGLE PAGE APPLICATION)
// Server Side routing :-Request to server is made(OTHER WEB APPLICATIONS)


// Whenever state Variable changes react RERENDERS the whole component everytime.



// SHIMMER EFFECT makes the skeleton of UI before displaying the actual UI

//Conditional rendering

// On change of a variable in a component REACT ReRENDERS WHole component.
// state
// hooks
// useState

// We use state variable in react because react doesn't recognises the change in local variable
// To get note of it or to sync variable with UI, react uses state variable.

function filterData(searchInput,restaurant){


    // const filteredData= restaurant.filter((restaurant)=>  
// restaurant[0]?.info?.name.toLowerCase().includes(searchInput.toLowerCase()));

    // const data= restaurant.map((a)=>{
    //     return  a[0]?.info?.name
    
    //   })
    const filteredData= restaurant.filter((restaurant)=>  
restaurant[0]?.info?.name.toLowerCase().includes(searchInput.toLowerCase()));


return filteredData;

// console.log(searchInput, data,filteredData );

}



    

const Body=()=>{
    const[allRestaurants,setAllRestaurants,]=useState([]);
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [searchInput,setSearchInput]=useState(); // To create state variables ,
    const [datumLat,setdatumLat]=useState([API.citiesName.map((element)=>{
      return element.lat
    })]);

    const [datumLng,setdatumLng]=useState([API.citiesName.map((element)=>{
      return element.lng
    })]);

    // useState returns=[variable name,function to update the variable]

    // searchInput is a local state variable.


    {/* +datum[0].map((element)=>{ return element.lat})+datum[0].map((element)=>{ return element.lng}) */}
    
// console.log(...datumLat )
// console.log(...datumLng);


useEffect(()=>{  
     getOneRestaurant()
    }
     ,[]
)               //UseEffect is a hook which takes two arguments,one is callBack Function 
                                 //other is dependency array.
                                //  Use effect is always called after Render.
                                //Empty dependency array=>Once per render
                                 //dependency array[searchText]=>Once after initial render+Every time
                                 // after render (Every time searchText changes) 



                                 
  async function getRestaurants(location){
    

   await fetch(location)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
        
        // console.log(location);

     var b=  data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((a)=>{
            return [a];     
        })
      //   var b=  data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((a)=>{
      //     return [a];     
      // })
setAllRestaurants(b);
setFilteredRestaurants(b);



      })
        .catch((error) => console.error("FETCH ERROR:", error));
      
        }
      








  async function getOneRestaurant(){
    

   await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then(data => {
        
        

     var b=  data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((a)=>{
            return [a];
        })
    
setAllRestaurants(b);
setFilteredRestaurants(b);



      })
        .catch((error) => console.error("FETCH ERROR:", error));
      
        }
      
      


        
        // if (isGoal) {
            //     return <MadeGoal/>;
            //   }
            //   return <MissedGoal/>;
            // }
            if(allRestaurants?.length===0 || filteredRestaurants?.length===0){
               return <Shimmer/>
            }

           
    return  (
        <React.Fragment>

<div>
<div className="search-container">
<input type="text"
 placeholder="Search Restaurant" 
 value={searchInput}
 onChange={(e)=>{
    // e.target.value => Whatever you write in input
    setSearchInput(e.target.value)
   
    const data=  filterData(e.target.value,allRestaurants);
    setFilteredRestaurants(data)
 }

 }
 />
{/* <button className="search-btn" onClick={
    ()=>{
      const data=  filterData(searchInput,allRestaurants);
      
      
    //   console.log("filtered data",data);
      setFilteredRestaurants(data)
    }
}>Search</button> */}
</div>

    
</div>

 
 



     
<div className="dropdown">

<label >Choose a location:</label>

<select name="cars" id="city">

{
API.citiesName.map((city)=>
 <option  key={city.lat} value={locationAPI+city.lat+"&lng="+city.lng }
 >{city.city}</option>) 
 
}



</select>
<button onClick={()=>{
    
    
    const select= document.getElementById("city")
    const location=select.value;
    
    getRestaurants(location);
   
}}> Search</button>

</div>




        <div className="restaurant-list">
       

              {
                  filteredRestaurants?.map((restaurant)=>{
                    //   return console.log(restaurant)
                      // Link is provided by react router dom.It is a wrapper over anchor tag.
                    return <Link 
                      key= {restaurant[0]?.info?.id} 
                      to={"rest/"+
                      restaurant[0]?.info?.id } 
                      >  <RestaurantsCards {...restaurant[0]?.info}  /></Link>
                    })
                }                    
                       
                    </div>

                    </React.Fragment>
    )




}

export default Body