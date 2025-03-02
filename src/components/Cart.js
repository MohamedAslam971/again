import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center P-5 my-4   ">
      <h1 className="font-bold text-2xl">CART</h1>
      <div className="flex justify-end w-6/12 m-auto">
        <button
          className="py-1 bg-black text-white rounded-lg font-semibold px-5 text-xl"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>
      <div className="bg-gray-50 shadow-lg m-auto w-6/12">
        {cartItems.length === 0 ? (
          <h1>!!!Looks like cart is empty ,order food</h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
