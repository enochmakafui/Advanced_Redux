import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductItem = ({ item }) => {
  // const { title, price, description } = props;
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={() => addToCartHandler(item)}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
