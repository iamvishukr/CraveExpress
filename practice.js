import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                  src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1702658444~exp=1702659044~hmac=5c807c3a486b485051b979aa608119f151040762b487142f0afb37613ab810c6"
               />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
} 

const RestaurantCard = (props) =>{
    const {resData} = props;
    
        const {
            cloudinaryImageId, name, cuisines, avgRating
        } = resData?.info;
        


    return(
        <div className="res-card">
            <img className="res-img"
             src={"https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/" + cloudinaryImageId}
            />
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>₹ {(resData.info.feeDetails.totalFee)/10} For Two</h4>
            <h5>{resData.info.sla.deliveryTime} Min</h5>
        </div>
    )
}
resList= [
    {
    "info":{
      "id": "108424",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
      "locality": "5TH Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Pizzas",
      "Italian",
      "Pastas",
      "Desserts"
      ],
      "avgRating": 4.4,
      "feeDetails": {
      "restaurantId": "108424",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 25,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 00:59:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "25620",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Intermediate Ring Road",
      "areaName": "Ejipura",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
      ],
      "avgRating": 4.2,
      "feeDetails": {
      "restaurantId": "25620",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 4000
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 4000
      },
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 16,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "16 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-16 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "140887",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "Mantri Avenue",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
      ],
      "avgRating": 4.5,
      "feeDetails": {
      "restaurantId": "140887",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "630",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 16,
      "lastMileTravel": 1.5,
      "serviceability": "SERVICEABLE",
      "slaString": "16 mins",
      "lastMileTravelString": "1.5 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-16 23:45:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Burgers",
      "American"
      ],
      "avgRating": 4.3,
      "feeDetails": {
      "restaurantId": "5934",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 1.4,
      "serviceability": "SERVICEABLE",
      "slaString": "18 mins",
      "lastMileTravelString": "1.4 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 05:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "65797",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "American",
      "Snacks",
      "Turkish",
      "Portuguese",
      "Continental"
      ],
      "avgRating": 4.4,
      "feeDetails": {
      "restaurantId": "65797",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "371281",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 1.3,
      "serviceability": "SERVICEABLE",
      "slaString": "18 mins",
      "lastMileTravelString": "1.3 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 04:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "263485",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
      "locality": "Kormangala 8th Block",
      "areaName": "Kormangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "Bakery",
      "Beverages",
      "Chaat",
      "Desserts",
      "Home Food",
      "Italian",
      "Maharashtrian"
      ],
      "avgRating": 4.5,
      "feeDetails": {
      "restaurantId": "263485",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "281782",
      "avgRatingString": "4.5",
      "totalRatingsString": "1K+",
      "sla": {
      "deliveryTime": 19,
      "lastMileTravel": 0.7,
      "serviceability": "SERVICEABLE",
      "slaString": "19 mins",
      "lastMileTravelString": "0.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 01:00:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "10576",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Pizzas"
      ],
      "avgRating": 4,
      "feeDetails": {
      "restaurantId": "10576",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 20,
      "lastMileTravel": 0.7,
      "serviceability": "SERVICEABLE",
      "slaString": "20 mins",
      "lastMileTravelString": "0.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 04:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "209557",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "JNC College Road",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Salads",
      "Snacks",
      "Desserts",
      "Beverages"
      ],
      "avgRating": 4.3,
      "feeDetails": {
      "restaurantId": "209557",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 2,
      "serviceability": "SERVICEABLE",
      "slaString": "21 mins",
      "lastMileTravelString": "2.0 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 01:00:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-jnc-college-road-koramangala-bangalore-209557",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "293023",
      "name": "Istah - The Mediterranean Way",
      "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
      "locality": "6th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "Mediterranean",
      "Snacks",
      "Biryani",
      "Grill",
      "Kebabs",
      "Arabian",
      "Lebanese",
      
      ],
      "avgRating": 4.5,
      "feeDetails": {
      "restaurantId": "293023",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "3518",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 16,
      "lastMileTravel": 0.7,
      "serviceability": "SERVICEABLE",
      "slaString": "16 mins",
      "lastMileTravelString": "0.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 02:00:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
      "description": "OnlyOnSwiggy"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "OnlyOnSwiggy",
      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "EVERY ITEM",
      "subHeader": "@ ₹139"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-6th-block-koramangala-bangalore-293023",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "22741",
      "name": "Chai Point",
      "cloudinaryImageId": "h1o3wrgyzmfar7jknllr",
      "locality": "1st Block",
      "areaName": "Koramangala",
      "costForTwo": "₹150 for two",
      "cuisines": [
      "Bakery",
      "Beverages",
      "Maharashtrian",
      "Snacks",
      "Street Food",
      "South Indian",
      "Punjabi",
      
      ],
      "avgRating": 4.5,
      "feeDetails": {
      "restaurantId": "22741",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "1607",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 1.2,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "1.2 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-16 23:00:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/chai-point-1st-block-koramangala-bangalore-22741",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "50842",
      "name": "CakeZone",
      "cloudinaryImageId": "fc43011c7623957c8c4e3588a1e6ba21",
      "locality": "KORAMANGLA",
      "areaName": "6th Block",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Bakery",
      "Desserts",
      "Sweets",
      "Ice Cream"
      ],
      "avgRating": 4.4,
      "feeDetails": {
      "restaurantId": "50842",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 4000
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 4000
      },
      "parentId": "7003",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 0.7,
      "serviceability": "SERVICEABLE",
      "slaString": "21 mins",
      "lastMileTravelString": "0.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-16 23:59:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/cakezone-koramangla-6th-block-bangalore-50842",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "11211",
      "name": "Taco Bell",
      "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "Mexican"
      ],
      "avgRating": 4.3,
      "feeDetails": {
      "restaurantId": "11211",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3800
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3800
      },
      "parentId": "1557",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "22 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 01:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/taco-bell-koramangala-bangalore-11211",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "52954",
      "name": "Faasos - Wraps, Rolls & Shawarma",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "Jakkasandra",
      "areaName": "Hsr Layout 5th Sector",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
      "restaurantId": "52954",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "21809",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 2.4,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "lastMileTravelString": "2.4 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-16 23:59:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹110"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-jakkasandra-hsr-layout-5th-sector-bangalore-52954",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "18973",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian"
      ],
      "avgRating": 4.2,
      "feeDetails": {
      "restaurantId": "18973",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3800
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3800
      },
      "parentId": "2120",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 14,
      "lastMileTravel": 0.6,
      "serviceability": "SERVICEABLE",
      "slaString": "14 mins",
      "lastMileTravelString": "0.6 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 02:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "305",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "gxydb9wvkadarapno4hk",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "South Indian",
      "North Indian",
      "Sweets",
      "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
      "restaurantId": "305",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "22",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 2.5,
      "serviceability": "SERVICEABLE",
      "slaString": "25 mins",
      "lastMileTravelString": "2.5 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-16 22:30:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1695133679/badges/Pure_Veg111.png",
      "description": "pureveg"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "pureveg",
      "imageId": "v1695133679/badges/Pure_Veg111.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-7th-block-koramangala-bangalore-305",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "10820",
      "name": "California Burrito",
      "cloudinaryImageId": "b58sysfvskincfwmgoqd",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "Mexican",
      "American",
      "Salads",
      "Continental",
      "Keto",
      "Healthy Food"
      ],
      "avgRating": 4.6,
      "feeDetails": {
      "restaurantId": "10820",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3300
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3300
      },
      "parentId": "1252",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 16,
      "lastMileTravel": 1.3,
      "serviceability": "SERVICEABLE",
      "slaString": "16 mins",
      "lastMileTravelString": "1.3 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-17 01:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/california-burrito-koramangala-bangalore-10820",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "70246",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
      "locality": "7th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Bakery",
      "Ice Cream"
      ],
      "avgRating": 4.4,
      "feeDetails": {
      "restaurantId": "70246",
      "fees": [
      {
      "name": "BASE_DISTANCE",
      "fee": 3000
      },
      {
      "name": "BASE_TIME"
      },
      {
      "name": "ANCILLARY_SURGE_FEE"
      }
      ],
      "totalFee": 3000
      },
      "parentId": "195515",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 1.4,
      "serviceability": "SERVICEABLE",
      "slaString": "18 mins",
      "lastMileTravelString": "1.4 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2023-12-16 23:59:00",
      "opened": true
      },
      "badges": {
      "textExtendedBadges": [
      {
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available",
      "fontColor": "#7E808C"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {
      "badgeObject": [
      {
      "attributes": {
      "description": "",
      "fontColor": "#7E808C",
      "iconId": "guiltfree/GF_Logo_android_3x",
      "shortDescription": "options available"
      }
      }
      ]
      }
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
      "logoCtx": {
      "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
      },
      "freedelMessage": "FREE DELIVERY",
      "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/starbucks-coffee-7th-block-koramangala-bangalore-70246",
      "type": "WEBLINK"
      }
    }
];


const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                {
                    resList.map((restaurant)=>(
                        <RestaurantCard resData={restaurant}  />
                    ))
                }
                
            </div>
        </div>
    )
}



const AppLayout = () =>{
    return(
    <div className="app">
        <Header />
        <Body />
    </div>
)}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);