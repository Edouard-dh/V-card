import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from "./components/NotFound";
import Portefolio from"./components/Portfolio"


import {
  HashRouter,
  Switch,
  Route

} from "react-router-dom";


export const Root = () => {
  return (

    <HashRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/portfolio" component={Portefolio} />
        <Route component={NotFound}/>
      </Switch>
    </HashRouter>

  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
