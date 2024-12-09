import { RiArrowDropDownFill, RiDropdownList } from "react-icons/ri";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setIndex}) => {

  // const [showItems, setShowItems] = useState(false);            --- Uncontrolled-component (we are not rely  on parent div)
   const handleClick =()=>{
  //   setShowItems(!showItems);
   //    setShowIndex(!showIndex);
          setIndex();
   }
    return (
        <div className="cursor-pointer pb-4" >
            <div className=" mt-4 mb-4 p-4 m-auto w-7/12  bg-gray-800 rounded-2xl border-b-2 border-yellow-500" >
              <div onClick={handleClick}  className="flex justify-between ">
              <span className="font-bold text-lg text-yellow-500">{data.title} ({data.itemCards.length})</span>
                <span >{<RiArrowDropDownFill className="text-4xl text-yellow-500" />}</span>
              </div>
                {showItems && <ItemList items= {data.itemCards} />}
            </div>
        </div>
    )
}

export default RestaurantCategory;