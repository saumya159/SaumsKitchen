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
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
      <Route exact path="/" component={App} />
      <Route exact path="/Chai" component={Chai} />
      <Route exact path="/Chicken65" component={Chicken65} />
      <Route exact path="/Coffee" component={Coffee} />
      <Route exact path="/Flatbreads" component={Flatbreads} />
      <Route exact path="/Butterchicken" component={Butterchicken} />
      <Route exact path="/Keemanaan" component={Keemanaan} />
      <Route exact path="/Appleroses" component={Appleroses} />
      <Route exact path="/Kpuffs" component={Kpuffs} />
      <Route exact path="/Tiramisu" component={Tiramisu} />
      <Route exact path="/Roll" component={Roll} />
      </ThemeProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
