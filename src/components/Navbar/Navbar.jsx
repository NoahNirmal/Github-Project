import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { toggletheme } from '../../redux/action'
import { useDispatch,useSelector } from 'react-redux'


export const Navbar=()=>{
    const theme =useSelector((state)=>state.reducer.theme)
    console.log(theme)
   
    const dispatch =useDispatch()
    const localname = localStorage.getItem("username")
  
    return(
        <>
        
        <div className='navbarContainer'>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/search'>Search</Link></li>
                <li><Link to={`/profile/${localname}`}>Profile</Link></li>
                <li><Link to='/' onClick={()=>{
                 localStorage.clear()
                 }}> Logout</Link></li>
                <li><button onClick={()=>{
                    dispatch( toggletheme())
                }}>{theme?"Light":"Dark"}</button></li>

            </ul>

        </div>
        </>
    )
}