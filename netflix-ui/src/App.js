import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import New from './pages/New'
import UserLiked from './pages/UserLiked'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/player' element={<Player/>}/>
      <Route exact path='/' element={<Netflix/>}/>
      <Route exact path='/movies' element={<Movies/>}/>
      <Route exact path='/tv' element={<TVShows/>}/>
      <Route exact path='/new' element={<New/>}/>
      <Route exact path='/mylist' element={<UserLiked/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
