import React from 'react'
import axios from './axios'
import {api_key} from './Constant'
import {imgurl} from './Constant'
import './Banner.css'
import { useEffect } from 'react'
import {useState} from 'react'
function Banner() {
  const [movie, setmovie] = useState()
  useEffect(()=>
  {
    axios.get(`trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
      console.log(response.data.results[5])
      setmovie(response.data.results[9])
    })
  },[])

  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imgurl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : "loading.."}</h1>
            <div className='bannerbts'>
                <button className='bt'>PLAY</button>
                <button className='bt'>MY LIST</button>
            </div>
            <h1 className='discription'>{movie ? movie.overview : ""}
            </h1>
        </div>
        <div className="fade">

            
        </div>
    </div>
  )
}

export default Banner