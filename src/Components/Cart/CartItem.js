// import classes from './CartItem.module.css';

// const CartItem = (props) => {
//   const { title, quantity, total, price } = props.item;

//   return (
//     <li className={classes.item}>
//       <header>
//         <h3>{title}</h3>
//         <div className={classes.price}>
//           ${total.toFixed(2)}{' '}
//           <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
//         </div>
//       </header>
//       <div className={classes.details}>
//         <div className={classes.quantity}>
//           x <span>{quantity}</span>
//         </div>
//         <div className={classes.actions}>
//         <button onClick={removeItemHandler}>-</button>
//         <button onClick={addItemHandler}>+</button>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default CartItem;

import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/cart-slice'; // or the correct path to your slice file

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));  // Assuming you have a 'removeItemFromCart' action
  };

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
