import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);
 
  const [showIndex, setShowIndex] = useState(0); 
  
  

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info;

  

  const catogories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl"> {name}</h1>
      <p className="font-bold text-lg">
        {cuisines}: {costForTwoMessage}
      </p>
      {catogories.map((catogory, index) => (
        // controlled component
        <RestaurentCategory
          key={catogory?.card?.card?.title}
          data={catogory?.card?.card}
          showItems={index === showIndex}
          setShowIndex ={()=> setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurentMenu;
 