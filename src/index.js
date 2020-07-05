import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import { render } from 'react-snapshot';
// import className form ./js_file_name;
//
{/*import { hydrate, render } from "react-dom";

    const rootElement = document.getElementById("root");
    if (rootElement.hasChildNodes()) {
      hydrate(<App />, rootElement);
    } else {
      render(<App />, rootElement);
    }*/}
// ReactDOM.render(
render(
  <React.StrictMode>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
