import { Routes, Route } from 'react-router'
import { useState } from 'react'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit'

import './App.css'

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    }
    
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/games' element={<GameCatalog />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/games/:gameId/details' element={<GameDetails email={authData.email} />} />
                    <Route path='/games/:gameId/edit' element={<GameEdit />} />
                    <Route path='/login' element={<Login onLogin={userLoginHandler} />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </main>
        </div>
    )
}

export default App