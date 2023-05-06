import React, { useEffect } from 'react'
import './Users.css'
import { useParams } from 'react-router-dom'
import { githubuserdetails, githubuserrepos } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'


export const Profile = () => {
    const dispatch = useDispatch()
    const details = useSelector((state) => state.reducer)
    // console.log(details.userrepos)
    const { name } = useParams()

    // console.log(name , "params")

    useEffect(() => {
        async function getUsersdetails() {
            const res = await fetch(`https://api.github.com/users/${name}`)
            // console.log(res)
            const data = await res.json()
            // console.log(data)
            dispatch(githubuserdetails(data))

        }

        async function getusersRepo() {
            const res = await fetch(`https://api.github.com/users/${name}/repos`)
            // console.log(res)
            const data = await res.json()
            // console.log(data)
            dispatch(githubuserrepos(data))
        }



        getUsersdetails()
        getusersRepo()

    }, [dispatch,name])
    return (
        <div className='profileContainer'>
            <h1>Github-Profile</h1>
            <div className='profiledetails_Container'>
                <div className='details_Avatar'>
                    <img src={details.userdetails.avatar_url} alt="" />
                </div>
                <div className='Avatar_details'>
                    <h2>{details.userdetails.login}</h2>
                    <div className='Avatar_btns'>
                        <button className='pink'>Repos:{details.userdetails.public_repos}</button>
                        <button className='violet'>Followers:{details.userdetails.followers}</button>
                        <button className='aqua'>Following:{details.userdetails.following}</button>


                    </div>
                    <h2>{details.userdetails.location}</h2>

                    <button className='view_profile'>View Profile</button>

                </div>

            </div>

            <h1>Repositories ({details.userrepos.length})</h1>
            <div className='repo_Container'>
                {
                    details.userrepos.map((ele) => {
                        return (
                            <>
                                <div className="repos_Details" key={ele.id}>
                                    <div className="repos_detailsleft">
                                        <h3>{ele.name} :- <button>{ele.language}</button></h3>
                                        <p>{ele.description}</p>

                                        <h4>Created At: {ele.created_at}</h4>
                                        <h4>Updated At: {ele.updated_at}</h4>


                                    </div>

                                    <div className="repos_detailsBtns">
                                        <button>View repo</button>
                                        <button>Live Demo</button>


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
