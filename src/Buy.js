import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import { Line } from "react-chartjs-2";
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import './Buy.css'
import Card from "./Card"

Chart.register(CategoryScale);
function Buy() {
    let handleInput=(event)=>{
        setNews(event.target.value)
        console.log(event.target.value)
    }
    let handleButton=(event)=>{
        setSearch(news)
        setValue('TIME_SERIES_INTRADAY')
        setLoad('yes')
    }
    let handleButton1=(event)=>{
        setSearch(news)
        setValue('TIME_SERIES_INTRADAY')
        setLoad('yes')
    }
    let handleButton2=(event)=>{
        setSearch(news)
        setValue('TIME_SERIES_DAILY')
    }
    let handleButton3=(event)=>{
        setSearch(news)
        setValue('TIME_SERIES_WEEKLY')
    }
    let handleButton4=(event)=>{
        setSearch(news)
        setValue('TIME_SERIES_MONTHLY')
    }
    
   
    const [search,setSearch]=useState('META')
    const [value,setValue]=useState('TIME_SERIES_INTRADAY')
    useEffect(() => {
        const axios = require("axios");

        const options = {
          method: 'GET',
          url: 'https://alpha-vantage.p.rapidapi.com/query',
          params: {
            function: "TIME_SERIES_DAILY",
            symbol: search,
            outputsize: 'compact',
            datatype: 'json'
          },
          headers: {
            'X-RapidAPI-Key': '24bea5c3b6mshe693b2657075e0cp10f1d3jsn349f84bc47d3',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            let arr=[];
            let arr1=[];
            for(let i in response.data['Time Series (Daily)'])
            {
                
                arr.push(response.data['Time Series (Daily)'][i]['1. open'])
                arr1.push(i);
            }
           
            dispatch(incNumber({username:myState.username,x:arr1,y:arr}));
        }).catch(function (error) {
            console.error(error);
        });
    },[search])
  
    const [news,setNews]=useState('india')
    
    const [load,setLoad]=useState('yes')
    const myState=useSelector((state)=> state.changethenum)
    const dispatch = useDispatch();
    const labels = myState.x;
    const data = {
        labels: labels,
        datasets: [
          {
            label: `${search} Stock Price`,
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: myState.y,
          },
        ],
      };
  return (     
    <div style={{'width':'100em'}} class="container">
    <h1 style={{'margin-left':'10em'}}>STOCK PRICE APP</h1>
    <h5 style={{'margin-left':'20em'}}>created by Pranav Verma ™</h5>
    <input placeholder="Enter Stock Symbol" class="inpt" onChange={handleInput}></input>
    <button class="btnn" onClick={handleButton}>View Chart</button>
    <br></br>
    <br></br>
    <br></br><br></br>
    
     {myState.y.length!=0?
        <Line  data={data}
        height="1000px"
        width="700px"
         options={{ maintainAspectRatio: false }}
          />:
          <div>Enter correct symbol</div>
             
   }

     
        
    </div>
  )
}

export default Buy