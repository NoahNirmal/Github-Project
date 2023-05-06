import React, { useState } from 'react'
import './SearchUser.css'
import { useNavigate } from 'react-router-dom'

export const SearchUser = () => {
  const [inputvalue, setInputvalue] = useState("")
const navigate =useNavigate()

  return (
    <div className='SearchContainer'>
      <div className="search">
        <h1>GitFetch-Profile Finder For  GitHub</h1>
        <p>Check out the repos, followers and more,
          just by entering your username!
        </p>
        <div className="input_Container">
          <input type="text" placeholder='Enter a username...' onChange={(e) => {
            setInputvalue(e.target.value)
          }} />
          <button onClick={()=>{
            navigate(`/Profile/${inputvalue}`)

          }}>search</button>
        </div>

      </div>

    </div>
  )
}
