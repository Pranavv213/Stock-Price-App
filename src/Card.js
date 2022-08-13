import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import './Card.css'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
function Card({state,state2}) {
    
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const [items,setItems]=useState([''])
    const [item,setItem]=useState('')
  return (
    
    
       <div class="img">
        <a href={state2}>
        <img href="spotify:album:1lZk7TnMgvS3mSlfeWW1b3" src={state}></img>
        </a>
        <div>
      
      </div>
        </div>
    
  )
}

export default Card