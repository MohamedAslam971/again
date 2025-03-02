import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice"

const ItemList = (props) => {
  // console.log((props.items));

  const dispatch = useDispatch()
  
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    // console.log(typeof(item));

  };
  return (
    <div>
      {props.items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-600 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-semibold">
                - ₹{""}
                {item.card.info.defaultPrice / 100
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <button className="bg-black px-4 rounded-lg text-white font-medium absolute bottom-0 left-12 shadow-lg" 
            onClick={() => handleAddItem(item)} >
              ADD+
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-2xl h-36"
            />
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default ItemList;
