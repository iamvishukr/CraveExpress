import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
    //console.log(resData); 
    const {
      cloudinaryImageId, name, avgRating , cuisines
    } = resData?.info;
    
     return(
        <div className="res-card  w-[250px] p-1 m-2 mb-12 h-[420px] hover:bg ">
            <img className='res-img h-44 w-64  rounded-xl shadow-2xl'
             src={CDN_URL + cloudinaryImageId

            }
            />
            <h3 className="font-bold text-lg my-4 text-center" >{name}</h3>
            <h4 className="text-center">{cuisines.join(", ")}</h4>
            <h4 className="text-center">{avgRating} Stars</h4>
            <h4 className="text-center">{(resData.info.costForTwo)}</h4>
            <h5 className="text-center">Delivery time - {resData.info.sla.deliveryTime} Min</h5>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    return(props)=>{
        return(
            <div className=" ">
              
                    <label className=" absolute bg-green-500 text-white text-center rounded-none p-2 m-2 mt-1 ml-3 ">Veg</label>

                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;