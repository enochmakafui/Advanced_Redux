import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        /> */}
        {items.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
