import RestaurentCard, { WithPromotedLabel } from "./RestaurentCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurent, setlistOfRestaurent] = useState([]);

  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurentCardPromoted = WithPromotedLabel(RestaurentCard);

  // console.log(listOfRestaurent);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistOfRestaurent(
      // Optional Chaining
      json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurent(
      json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like your are offline please check your Internet</h1>;

  //   Condional Rendering
  //   if (listOfRestaurent.length === 0) {
  //     return <Shimmer />;
  //   }

  const {loggedInUser, setUserName} = useContext(UserContext) 
  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="mx-4 rounded-md bg-green-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurent = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>

        <div className="m-4 p-4">
          <button
            className="mx-2 rounded-md bg-green-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              filteredList = listOfRestaurent.filter(
                (res) => res.info.avgRating > 4.5
              );
              setlistOfRestaurent(filteredList);
              // console.log(listOfRestaurent);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>
        <div className="m-4 p-4">
          <label>UserName : </label>
          <input className="border border-black p-1"
          value={loggedInUser}  onChange={(e)=> setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 ">
        {filteredRestaurent.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurents/" + restaurant.info.id}
          >
            {restaurant.info.id % 2 !== 0 ? (
              <RestaurentCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
