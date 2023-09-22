import { IMG_CDN_URL ,IMG_URL } from "../constants"

export const RestaurantCard=({name,lastMileTravelString,cuisines,cloudinaryImageId})=>{
    return(
      
    
            <div className='card'>
    <img src={IMG_CDN_URL+cloudinaryImageId}/>
       <h2 id="cuisine"> {cuisines.join(" , ")}</h2>
       <h3>{name}</h3>
       <h4>{lastMileTravelString}</h4>
    
            </div>
        )
    }
    
    export const RestaurantsCards=({name,locality,areaName,cloudinaryImageId})=>{
        return(
          
        
                <div className='card'>
        <img src={IMG_CDN_URL+cloudinaryImageId}/>
           <h2 id="cuisines"> {name}</h2>
           <h3>{areaName}</h3>
           <h4>{locality}</h4>
           
                </div>
            )
        }
        
        export const ShimmerCard=()=>{
            return(
              
            
                    <div className='card shimmerCard'>
            <img src=""/>
               <h2 id="cuisine"> {}</h2>
               <h3>{}</h3>
               <h4>{}</h4>
            
                    </div>
                )
            }



    
