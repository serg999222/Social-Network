import React, {Suspense} from 'react'
import {BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import MessageContainer from './components/pages/Message/MessageContainer'
import MainContainer from './components/pages/Main/MainContainer'
import Registration from './components/pages/login/Registration'
import Login from './components/pages/login/Login'
import FrendsContainer from './components/pages/frends/FrendsContainer'
import Preloader from './components/Preloader'
import {MemoizedImage} from './components/pages/Image/Image'
const ProfilPageContainer = React.lazy(() => import('./components/pages/ProfilPage/ProfilePageContainer'));
const Settings = React.lazy(() => import('./components/pages/settings/Settings'));
 

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Nav />
        <div className="main__styles">
             
        <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/Image/*' element={<MemoizedImage/>} />
            <Route path='/Frends/*' element={<FrendsContainer />} />
            <Route path='/Message/*' element={<MessageContainer />} />
            <Route path='/Settings/*' element= {<Suspense fallback={<div><Preloader isLoading={true}/></div>}> <Settings/></Suspense>}/>
            <Route path='/ProfilPage/:id' element= {<Suspense fallback={<div><Preloader isLoading={true}/></div>}> <ProfilPageContainer/></Suspense>}/>
            <Route path='/Registration/*' element={<Registration/>} />
            <Route path='/Login/*' element={<Login/>} />

          </Routes>
         
        </div>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;