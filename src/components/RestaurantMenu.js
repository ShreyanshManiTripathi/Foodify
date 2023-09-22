import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../constants";
// import useState from 'react-usestateref'

  
  // ref.current will always have the latest state  

const RestaurantMenu=()=>{
    const [resInfo,setResTnfo]=useState([])
    // const[resInfo,setResTnfo]=useState([]);
useEffect(()=>{
   
    fetchMenu()
    
}
,[]
)


const {resId}=useParams();

// console.log(resId,lat,lng);





const fetchMenu=async ()=>{
    const MENU="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&&restaurantId=570511"
    const data = await  fetch(MENU_API+resId)
    // MENU_API+resId
    
    data.json().then(
        
        json=>{
            setResTnfo(json?.data)
                // console.log(json?.data?.cards[0]);           
         
            }
          );
          // data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards
          //   setResTnfo(fdata?.data?.cards[0])
          
          
        } 
          if (resInfo?.length==0) return <Shimmer/>;
        //   const {name,costForTwoMessage,cuisines,city,avgRatingString
        //   }  =resInfo?.card?.card?.info
//   console.log(resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.itemCards[2].card.info.name); 




const {name,cuisines,costForTwoMessage,city,avgRatingString}=resInfo?.cards[0]?.card?.card?.info


const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

const itemCardss2=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards

console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card );
// console.log(itemCards)

return (          
   
    <div className="menu">
<h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
<h2>{cuisines.join(",")}</h2>
<h2>{costForTwoMessage}</h2>
<h2>{city}</h2>
<h2>{avgRatingString}</h2>
<h2>Menu</h2>
<ul>
{itemCards?.map(item=><li key={item.card.info.id}> {item.card.info.name} <span>-Rs</span> {item.card.info.price/100}</li>)}
</ul>
<ul>
{itemCardss2?.map(item=><li key={item.card.info.id}> {item.card.info.name}<span>-Rs</span>{item.card.info.price/100}</li>)}
</ul>

</div>

)

}

export default RestaurantMenu