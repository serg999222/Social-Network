import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Image from './components/pages/Image/Image';
import Nav from './components/Nav/Nav';
import Settings from './components/pages/settings/Settings';
import Frends from './components/pages/frends/Frends';
import MessageContainer from './components/pages/Message/MessageContainer'
import ProfilPage from './components/pages/ProfilPage/ProfilPage';
import MainContainer from './components/pages/Main/MainContainer'
import FrendsContainer from './components/pages/frends/FrendsContainer'








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
            <Route path='/Image/*' element={<Image/>} />
            <Route path='/Frends/*' element={<FrendsContainer />} />
            <Route path='/Message/*' element={<MessageContainer />} />
            <Route path='/Settings/*' element={<Settings/>} />
            <Route path='/ProfilPage/*' element={<ProfilPage/>} />
          </Routes>
         
        </div>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;