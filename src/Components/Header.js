import { useDispatch, useSelector } from "react-redux";
import {authActions} from '../Store.index'

const Header= ()=>{
    const dispatch=useDispatch()
    const isAuth=useSelector(state.auth.isAuthenticated)

    const logoutHandler= () =>{
        dispatch(authActions.logout())

    }

    return(
        <header>
            <h1>Redux Auth</h1>
            {isAuth && 
            (<nav>
             <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My sales</a>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
             </ul>
            </nav> 
        )}
            

        </header>
    )

}
export default Header;