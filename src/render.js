import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

export let rerenderEntireTree  = (state)=>{
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}