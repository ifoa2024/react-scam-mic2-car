import { Link } from "react-router-dom";
import routes from "../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/UserSlice";

export default function Navbar(){

    const user = useSelector((state)=>state.user.value);
    const dispatch = useDispatch();

    const logout = ()=>{
        dispatch(removeUser());
    }


    return (
        <>
            <div className="navbar -100">
  <div className="flex-1 bg-RGB(201, 36, 7)">
    <Link className="btn btn-ghost text-xl" to={routes.home}>Autoscam24</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link className="nav-link" to={routes.info}>Info</Link></li>
      
      <li>
        <details>
            {!user && 
            <>
                <summary>Benvenuto</summary>
                    <ul className="bg-base-100 rounded-t-none p-2">
                        <li>
                        <Link className="nav-link" to={routes.register}>Registrati</Link>
                        </li>
                    </ul>
            
            </>

            ||

            <>
            <details>
                 <summary>Benvenuto {user.name}</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                    <Link to={routes.todo}>ToDo</Link>
                    <button onClick={logout}>Logout</button>
                    </li>
                </ul>

            </details>
            </>          
            }
        </details>
      </li>
    </ul>
  </div>
</div>

        </>
    )
}
