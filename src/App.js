import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import HomeBuilder from "./containers/HomeBuilder/HomeBuilder";
import ProductsBuilder from "./containers/ProductsBuilder/ProductsBuilder";

function App() {
  return (
    <div>
        <Router>
            <Layout>
                <Switch>
                    <Route path="/my-burger">
                        <BurgerBuilder></BurgerBuilder>
                    </Route>
                    <Route path="/" exact>
                        <HomeBuilder></HomeBuilder>
                    </Route>
                    <Router path="/products">
                        <ProductsBuilder></ProductsBuilder>
                    </Router>
                </Switch>
            </Layout>
        </Router>
    </div>
  );
}

export default App;
