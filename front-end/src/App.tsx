import { useEffect, useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import GamesPage from './features/games/GamesPage'
import { getGames } from './features/games/gameSlice'
import { useAppDispatch } from './store/store'
import Navbar from './components/Navbar'

function App() {
  const dispatch=useAppDispatch()

  const initApp= useCallback(async() => {
    await dispatch(getGames())
    },[dispatch])
  



  useEffect(() => {
    initApp()
  }, [])
  
  return (
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path='/' element={<GamesPage/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
