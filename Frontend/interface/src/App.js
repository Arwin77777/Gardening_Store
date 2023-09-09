import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Nav from './components/Home/Nav';
import Plants from './components/plants';
import Tools from './components/tools';
import Decor from './components/decor';
import Grocery from './components/grocery';
import Account from './components/account';
import Wishlist from './components/wishlist';
import Cart from './components/cart';
import Add from './components/add';
import Home from './components/Home/home';
import Slider from './components/carcard';
import OrganicPage from './components/organicpage';
import Cards from './components/card';
import Details from './components/desc';
import HandleCart from './components/handleCart';
import Sell from './components/seller';
import Feedback from './components/feedback';
import Advp from './components/profile';
import Sea from './components/sea';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path='/plants' element={<Plants></Plants>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/decor' element={<Decor></Decor>}></Route>
        <Route path='/grocery' element={<Grocery></Grocery>}></Route>
        <Route path='/profile' element={<Advp></Advp>}></Route>
        <Route path='/cart' element={<HandleCart></HandleCart>}></Route>
        <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
        <Route path='/sell' element={<Add></Add>}></Route>
        <Route path='/organic' element={<OrganicPage></OrganicPage>}></Route>
        <Route path='/details' element={<Details></Details>}></Route>
        <Route path='/seller' element={<Sell></Sell>}></Route>
        <Route path='/feedback' element={<Feedback></Feedback>}></Route>
        <Route path='sea' element={<Sea></Sea>}></Route>
      </Routes>
      {/* <Cards></Cards> */}
    </div>
  );
}

export default App;
