import { useDispatch } from 'react-redux';
import { cartActions } from '../Store/cart-slice';  // Adjust the path as needed
import classes from './ProductItem.module.css'
import Card from '../UI/Card'; // Adjust the path if needed


const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
