import React from 'react';
import './index.css';
import store from './redux/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));


export function rerenderEntireTree(state) {
  root.render(
    <React.StrictMode>
      <App store={store} state={state} dispatch={store.dispatch.bind(store)}  />
    </React.StrictMode>
  );
}

store.subscribe( () =>{
 
  let staten = store.getState()
  rerenderEntireTree(staten)
})

rerenderEntireTree(store.getState())




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
