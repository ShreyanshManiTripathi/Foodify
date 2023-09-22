import React from 'react'
import ReactDOM from "react-dom/client";
// Default Import
// import Header from "./components/Header"  
// Named Import 
// import {Title} from "./components/Header"

// OR
import Header ,{Title} from "./components/Header.js"
//OR
import * as HeadComp from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About.js';
import ContactUs from'./components/ContactUs.js';
import Cart from './components/Cart.js';
import {ErrorPage} from './components/Error.js'
import RestaurantMenu from './components/RestaurantMenu.js';


document.getElementById('root').innerHTML='hi'
// const heading=React.createElement("h1",{},"Namaste Everyone hi");
const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);


//config driven UI






// On change of a variable in a component REACT ReRENDERS WHole component.


// ?. Optional Chaining

//Instead of writing props we can use {restaurant},it is behaving as props.

// const{name,lastMileTravelString,cuisines,cloudinaryImageId}= restaurant.data.data

//VIRTUAL DOM:-React uses representation of DOM which is known as virtual DOM.

//Virtual DOM is used for RECONCILIATION.

/*RECONCILIATION is an ALGORIHTM  that react uses to note the difference
between DOM and Virtual DOM which helps it in deteremining what needs and needs not to be change 
or update in the UI. React does not renders whole changed UI .It only updates the changes*/


// Reconciliation is one of the factor that makes react fast.


/*
KEY:-Key is like an id of components.Two componenets can never have same key.

SIGNIFICANCE OF KEY:-

If one parent has child with same name.e.g:-one body has two div and another third div is added then react gets 
confused thinking which div is added.
This doesn't happens with different child components like one img and other is div.
So, in order to get rid of this ,concept of KEY is introduced.
Key is like an id of components(div,img,span  etc.).



Why shouldn't we use index as a key?


//no key(not acceptable) < index key (Last Option) < unique key (Best Practice)






REACT FIBRE:-
It Is new RECONCILIATION engine introduced in REACT 16.IT is responsible for diff algorithm.

*/







const AppLayout=()=>{
return(
    <>
{/* <HeadComp.Title/>   That is the reason  we use . in React.Fragment  */}

<Header/>
<Outlet/>
<Footer/>

    </>
)
}


const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contactUs",
        element:<ContactUs/>,
    },
    {
        path:"/cart",
        element:<Cart/>,
    }
    ,
    {
        path:"/rest/:resId",
        element:<RestaurantMenu/>,
    }
    ],
    errorElement:<ErrorPage/>
},


])



root.render(<RouterProvider router={appRouter}/>)
// const styleobj={
//     border:'2px solid black',
//     color:'white',
//     backgroundColor:"#feb561"
// }




