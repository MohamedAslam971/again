
import ItemList from "./ItemList";

const RestaurentCategory = ({data, showItems, setShowIndex}) => {
  // console.log(Array.isArray(props.data.itemCards));

  const handleClick =() => {
    setShowIndex();

  }
  
  


  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-5 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-2xl">🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurentCategory;
