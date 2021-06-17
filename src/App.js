import logo from './logo.svg';
import './App.css';
import Header from './containers/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <div className="App">
    <Router>
         <Header></Header>
         <Switch>
          <Route path="/" exact component={ProductListing}></Route>

          <Route path="/product/:productId" exact component={ProductDetails}></Route>

          <Route > 404 Not Found</Route>
          </Switch>


    </Router>
    </div>
  );
}

export default App;
