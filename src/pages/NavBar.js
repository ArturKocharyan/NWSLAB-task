import React, { useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux'
import { selectCat,loadCats } from '../featurs/catsSlice';
import './MainPageStyle.css'
import { Link } from "react-router-dom";
import {useState} from 'react'
import axios from "axios";


function NavBar(){

    const cats = useSelector(selectCat)    
    const dispatch = useDispatch()
   
    

    useEffect(()=>{
        dispatch(loadCats())
      },[])

      console.log(cats);
    

    return(
        <div className="NavBarStyle" >
        {
            cats.map((item)=>{
                return <Link 
                className="DivInNav" 
                key={item.id} 
                to='/mainpage' state={item.id}
                >{item.name}</Link>
            })
        }
      </div>
    )
}

export default NavBar