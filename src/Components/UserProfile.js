import classes from './UserProfile.module.css';
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import { AuthenticationHandler } from './store';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const dispatch=useDispatch();
  const naviagte=useNavigate()
  const isAuthencated=useSelector(state=>state.isAuthenticated)

  const logoutHandler=()=>{
    dispatch(AuthenticationHandler())
    naviagte('/')
  }
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <button onClick={logoutHandler}>Logout</button>
    </main>
  );
};
export default UserProfile;