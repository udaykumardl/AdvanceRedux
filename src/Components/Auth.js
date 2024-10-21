import { useDispatch } from "react-redux";



const Auth= () =>{
    const dispatch= useDispatch();

    const logoutHandler=(event)=>{
        event.preventDefault();

        dispatch(authActions.login())
    }
    return(
        <section>

        </section>
    )
}
export default Auth;