import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    //console.log(resData); 
    const {
      cloudinaryImageId, name, avgRating , cuisines
    } = resData?.info;
    
     return(
        <div className="res-card">
            <img className='res-img'
             src={CDN_URL + cloudinaryImageId

            }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹ {(resData.info.costForTwo)}</h4>
            <h5>{resData.info.sla.deliveryTime} Min</h5>
        </div>
    )
}

export default RestaurantCard;