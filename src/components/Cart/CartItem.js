import classes from './CartItem.module.css';

const CartItem = ({item}) => {
  // const { title, quantity, total, price } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{item.title}</h3>
        <div className={classes.price}>
          ${item.price * item.quantity.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
