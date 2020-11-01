import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Chai from './pages/Chai'
import Chicken65 from './pages/Chicken65'
import Coffee from './pages/Coffee'
import Flatbreads from './pages/Flatbreads'
import Butterchicken from './pages/Butterchicken'
import Keemanaan from './pages/Keemanaan'
import Appleroses from './pages/Appleroses'
import Kpuffs from './pages/Kpuffs'
import Tiramisu from './pages/Tiramisu'
import Roll from './pages/Roll'

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={App} />
        <Route path="/Chai" component={Chai} />
        <Route path="/Chicken65" component={Chicken65} />
        <Route path="/Coffee" component={Coffee} />
        <Route path="/Flatbreads" component={Flatbreads} />
        <Route path="/Butterchicken" component={Butterchicken} />
        <Route path="/Keemanaan" component={Keemanaan} />
        <Route path="/Appleroses" component={Appleroses} />
        <Route path="/Kpuffs" component={Kpuffs} />
        <Route path="/Tiramisu" component={Tiramisu} />
        <Route path="/Roll" component={Roll} />
      </ThemeProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
