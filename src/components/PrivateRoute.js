import {useAuth} from "../AuthContex/AuthContex";
import {Redirect,Route} from "react-router-dom";

export default function PrivateRoute({component: Component,...rest})
{
   const{currentUser} = useAuth();
   return currentUser ? (
       <Route {...rest}>{(props)=> <Component {...props}/>}</Route>
   ) : (<Redirect to="/login"/>);
}