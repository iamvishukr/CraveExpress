import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId, name, avgRating, cuisines
    } = resData?.info;
    
    return(
        <div className="res-card w-64 h-full rounded-xl overflow-hidden shadow-2xl border border-gray-300  hover:shadow-yellow-200 transition-shadow duration-300 bg-white p-4">
            <img className='h-44 w-full object-cover rounded-xl mb-4'
             src={CDN_URL + cloudinaryImageId}
             alt={name}
            />
            <h3 className="font-bold text-xl mb-2  text-gray-800">{name}</h3>
            <h4 className="text-gray-600 text-sm mb-2">{cuisines.join(", ")}</h4>
            <div className="flex justify-between items-center">
              <h4 className="bg-green-500 border border-green-600 text-white px-2 py-1 rounded-full text-sm">{avgRating} Stars</h4>
              <h5 className="text-gray-600 text-sm">Delivery time - {resData.info.sla.deliveryTime} Min</h5>
            </div>
            <h4 className="text-gray-600 text-sm font-bold mt-2">{resData.info.costForTwo}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return(props)=>{
        return(
            <div className="relative ">
                <label className="absolute top-2 gap-4 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;

