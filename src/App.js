import React from 'react'
import Navbar from './Component/Navbar'
import './App.css'
import Banner from './Component/Banner';
import {trending,comedy,action,romance, Netflixog, Horror} from './urls'
import RowPost from './Component/RowPost';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      
      <Banner/>
      <RowPost  title='NETFLIX ORGINALS' url={Netflixog}/>
      <RowPost  title='TRENDING' url={trending}/>
      <RowPost title='COMEDY' isSmall url={comedy} />
      <RowPost  title='ROMANCE' isSmall url={romance} />
      <RowPost  title='ACTION' isSmall url={action} />
      <RowPost  title='HORROR' isSmall url={Horror} />
      
      

    </div>
  );
}

export default App