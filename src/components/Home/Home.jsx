import React from 'react'
import './Home.css'
import { useEffect } from 'react'
import { githubusers } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export const Home = () => {
    const dispatch = useDispatch()
    const userdata = useSelector((state) => state.reducer)
    console.log(userdata.users)

    const dark ={color:"white"}
    const light ={color:"black",backgroundColor:"rgb(189, 242, 242)"}
    const lightcard={backgroundColor:"white"}

   
    const navigate = useNavigate()
    useEffect(() => {
        async function getUsers() {
            const res = await fetch("https://api.github.com/users")
            // console.log(res)
            const data = await res.json()
            // console.log(data)
            dispatch(githubusers(data))


        }

        getUsers()

    }, [dispatch])
    return (
        <div className='homeContainer' style={userdata.theme?dark:light}>
            <div className='cardsContainer'  >


                {
                    userdata.users?.map((ele) => {
                        return (
                            <>
                                <div className='cards' key={ele.id} onClick={()=>{
                                 navigate(`/profile/${ele.login}`)
                                }} style={userdata.theme?dark:lightcard}>
                                    <div className='profile_avatar'>
                                        <img src={ele.avatar_url} alt="" />

                                    </div>
                                    <div className='profile_details'>
                                        <h4>{ele.login}</h4>
                                        <p>following/other_user</p>
                                        <div className='profile_articles'>
                                            <div className='profile_names'>
                                                <p>Articles</p>
                                                <p>38</p>

                                            </div>
                                            <div className='profile_names'>
                                                <p>Followers</p>
                                                <p>980</p>

                                            </div> <div className='profile_names'>
                                                <p>Rating</p>
                                                <p>8.9</p>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </>
                        )
                    })
                }

            </div>


        </div>
    )
}
