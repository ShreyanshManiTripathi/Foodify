const SPN="https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8753399&lng=79.9147268&collection=90087&tags=layout_ux4%2CDISCOUNTING_COUPON_MEGASAVER&sortBy=&filters=&type=rcv2rng%2Fmd%2Fcarousel%2Fproduction%2Fd5dd1b585e8e157e2fb63dd490517e8c&offset=0&page_type=null"
const PUNE="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&collection=90087&tags=layout_ux4%2CDISCOUNTING_COUPON_MEGASAVER&sortBy=&filters=&type=rcv2rng%2Fmd%2Fcarousel%2Fproduction%2Fd5dd1b585e8e157e2fb63dd490517e8c&offset=0&page_type=null"
const DELHI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=90087&tags=layout_ux4%2CDISCOUNTING_COUPON_MEGASAVER&sortBy=&filters=&type=rcv2rng%2Fmd%2Fcarousel%2Fproduction%2Fd5dd1b585e8e157e2fb63dd490517e8c&offset=0&page_type=null"
const LUCKNOW="https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&collection=90087&tags=layout_ux4%2CDISCOUNTING_COUPON_MEGASAVER&sortBy=&filters=&type=rcv2rng%2Fmd%2Fcarousel%2Fproduction%2Fd5dd1b585e8e157e2fb63dd490517e8c&offset=0&page_type=null"


const Dropdown=()=>{
 return (<div>

    
    <label for="cars">Choose a location:</label>
    
<select name="cars" id="city">
  <option value={SPN}>Shahjahanpur</option>
  <option value={LUCKNOW}>Lucknow</option>
  <option value={PUNE}>Pune</option>
  <option value={DELHI}>Delhi</option>
</select>
</div>
 )
}

export default Dropdown