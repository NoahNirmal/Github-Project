import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import Loginpage from '../../images/loginpage.png'

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const loginuser = () => {
        console.log(username)
        console.log(password)
        if (username !== "" && password !== "") {
            localStorage.setItem("username", username)
            navigate("/home")

        }
        else {
            alert("please enter valid user")
        }
    }

    return (
        <div className='login'>

            <div className="login_maincontainer">

                <div className="login_imageContainer">
                    <img src={Loginpage} alt="img" />

                </div>

                <div className="login_container">
                    <h1>Login</h1>

                    <div className="login_inputs">
                        <label> Username:</label>
                        <input type="text" placeholder='Enter github username' onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                        <label> Password:</label>
                        <input type="password" placeholder='Enter admin@123' onChange={(e) => {
                            setPassword(e.target.value)

                        }} />

                        <button onClick={() => {
                            loginuser()
                        }}>Login</button>

                        <p>forget password ?</p>

                    </div>




                </div>

            </div>





        </div>
    )
}
