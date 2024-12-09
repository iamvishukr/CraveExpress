import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    //API fetch
    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
        // console.log(json.data);
        
    };

    return resInfo;
};

export default useRestaurantMenu;