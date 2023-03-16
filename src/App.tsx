import {BrowserRouter,Routes,Route, useParams} from 'react-router-dom'
import Home from './components/home';
import Collection from './components/collection';
import Product from './components/product';
import './App.css';
import Cart from './components/cart';
import Checkout from './components/checkout';
import Receipt from './components/receipt';
import NotFound from './components/notFound';
function App() {
  const isLoader = (load:boolean) =>{

  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/collection/:id" element={<Collection />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/receipt" element={<Receipt />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
