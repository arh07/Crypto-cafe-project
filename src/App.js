
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Coins from './component/Coins/Coins';
import Conatct from './component/Conatct/Conatct';
import Crypto from './component/CryptoCafe/Crypto';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/conatct' element={<Conatct></Conatct>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/crypto' element={<Crypto></Crypto>}></Route>
      </Routes>
    </div>
  );
}

export default App;
