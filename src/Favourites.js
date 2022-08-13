import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import {Link} from 'react-router-dom';
import './Buy.css'
import Card from './Card'
function Favourites() {
  const myState=useSelector((state)=> state.changethenum)
  const dispatch = useDispatch();
  const movie=myState.items
  console.log(myState)
  return (<div>
   <div style={{"color":"white"}}><h1>Favourites</h1></div>
    <div class="movie">
        {movie.map(x=>{
            console.log(x)
            return (
            <div >
            <Card image={x.image}/>
            </div>
            )
        })}
        </div>
        </div>
  )
}


export default Favourites