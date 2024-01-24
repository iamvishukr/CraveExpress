import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    return (
        <div>
            <div className=" mt-4 mb-4 shadow-xl border border-gray p-4 bg-slate-50 m-auto w-6/12" >
              <div className="flex justify-between ">
              <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>{'🔽'}</span>
              </div>
                <ItemList items= {data.itemCards} />
            </div>
        </div>
    )
}

export default RestaurantCategory;