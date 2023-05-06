import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const Protected = (props) => {
    const {Component} = props

    const navigate= useNavigate()
    useEffect(() => {
        let name= localStorage.getItem('username')
        if(!name){
          navigate('/')
        }
        
      
    
    
    })
  return (
    <>
    <Component />
    </>
  )
}
