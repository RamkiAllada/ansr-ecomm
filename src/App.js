import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import ProductDetail from './components/productDetail';
import './App.css';
import './styles/index.scss';

import ProductsList from './components/productList';
function App() {
  const [products, setProducts] = useState([]);
  const [selectedPrd, setSelectedPrd] = useState(null);
  const fetchProducts = () => {
    fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/productdf38641.json')
    .then((response) => response.json()).then((result) => {console.log(result);setProducts(result)})
  }
  const updateSelectedPrd = (prd) => {
    setSelectedPrd(prd)
  };
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div className="App container">
      <Switch>
        <Route exact path={`/`}>
          <ProductsList products= {products} updateSelectedPrd = {updateSelectedPrd}/>
        </Route>
        <Route path={`/:productId`}>
        {selectedPrd ? <ProductDetail productData={selectedPrd}/> :<Redirect to={'/'}/> }
        </Route>
      </Switch>
    </div>
  );
}

export default App;
