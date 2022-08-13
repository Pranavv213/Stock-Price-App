import React,{useState,useEffect} from 'react';
import {database} from './firebase'
import './firebase1.css'
function Firebase1({n}) {
    const [username,setUsername]=useState('')
    const [no,setNo]=useState('')
    const [user,setUser]=useState('')
    const [data,setData]=useState('hello')
    const [info,setInfo]=useState('')
    const [print,setPrint]=useState('already have an account')
    let createUserInDB=async()=>{
         let data=await database.users.get()
        data.forEach((obj)=>{
            if(obj.data().name=="docs")
            {
                let array=obj.data().arr;
                let i=0;
                array.forEach(x=>{
                    if(x.username==username)
                    {
                        i=1;
                    }
                })
                if(i==1)
                {
                    console.log('user already found')
                    setInfo('username not available, try with different username')
                    i=0;
                }
                else
                {
                    let name1=obj.data().name;
                    array.push({username,no})
                  
                    
                    database.users.doc(obj.id).set({name:'docs',arr:array})
                    setPrint('Signup successful. Click to open Login Page')
                }
               
                
            }
           
        })
      
        
    }
    
  return <div>
      {/* {user==null?:<div>{data}</div>} */}
      {n}
      <div class="Main">
      <div class="input">
       <input placeholder="username" value={username} onChange={(e)=>{
          setUsername(e.target.value)
      }}></input>
    
     <input placeholder="password" type="password" value={no} onChange={(e)=>{
          setNo(e.target.value)
      }}></input>
      </div>
  <div class="button">
      <button class="aq" onClick={createUserInDB}>Signup</button></div>
      </div>
    
      {info}
      <br></br>
      <a href="/login">{print}</a>
      {/* {data} */}
  </div>;
}

export default Firebase1;
