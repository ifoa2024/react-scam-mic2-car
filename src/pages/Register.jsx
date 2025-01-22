import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../store/UserSlice"
import { useState } from "react";

export default function Register(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state)=>state.user.value);


    const handleName = (e)=>{
        setName(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUser({name, password}))
    }

    return (
        <main id="registerMain">
            <form id="registerForm" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="" id="name" onChange={handleName} />
                    <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500">Nome</label>
                </div>
                <div>
                    <input type="password" name="" id="password" onChange={handlePassword}/>
                    <label htmlFor="password">Password</label>
                </div>
                <button id="formButton">Registrati</button>
            </form>
        </main>

    )
}