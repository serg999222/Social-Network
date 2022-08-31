import {BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Image from './components/pages/Image/Image';
import Main from './components/pages/Main/Main';
import Nav from './components/Nav/Nav';
import Settings from './components/pages/settings/Settings';
import Frends from './components/pages/frends/Frends';
import Message from './components/pages/Message/Message';
import ProfilPage from './components/pages/ProfilPage/ProfilPage';








function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Nav />
        <div className="main__styles">
             
        <Routes>
            <Route path='/*' element={<Main store={props.store} newsPage={props.state.newsPage} dispatch={props.dispatch}/>} />
            <Route path='/Image/*' element={<Image/>} />
            <Route path='/Frends/*' element={<Frends/>} />
            <Route path='/Message/*' element={<Message userDialogs={props.state.messagePage} dispatch={props.dispatch} />} />
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
