import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurentCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData.info.sla;

  const {loggedInUser}= useContext(UserContext); 
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] min-h-[350px] flex flex-col justify-between rounded-lg shadow-lg bg-orange-50 hover:bg-orange-200">
      <img
        className="pic w-full h-32 object-cover rounded-lg"
        alt="pizza_pic"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex-grow">
        <h3 className="font-bold text-lg mt-2">{name}</h3>
        <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
        <h4 className="font-semibold">{avgRating} Stars</h4>
        <h4 className="font-semibold">₹{costForTwo.replace(/\D/g, "")}</h4>
      </div>
      <h4 className="mt-auto font-medium text-green-600">{deliveryTime} min</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-950 font-medium text-white ml-4 p-1 rounded-tr-lg rounded-br-lg">Promoted</label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
