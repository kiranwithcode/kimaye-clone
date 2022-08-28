import { Route, Routes } from 'react-router';
import './App.css';
import AllFruitsPage from './pages/AllFruitsPage';
import CartPage from './pages/CartPage';
import CheckoutInfo from './pages/CheckoutInfo';
import Home from './pages/Home';
import Payment from './pages/Payment';
import RozarpayCard from './pages/RozarpayCard';
import RozarpayPayment from './pages/RozarpayPayment';
import Shipping from './pages/Shipping';
import SuccessPayment from './pages/SuccessPayment';

function App() {
  return (
    <div>
     
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/collections/all-fruits' element={<AllFruitsPage />}/>
      <Route path='/cart' element={<CartPage />}/>
      <Route path='/checkout-info' element={<CheckoutInfo />}/>
      <Route path='/checkout/shipping' element={<Shipping />}/>
      <Route path='/payment' element={<Payment />}/>
      <Route path='/rozarpay' element={<RozarpayPayment />}/>
      <Route path='/rozarpay/card' element={<RozarpayCard />}/>
      <Route path='/success/payment/:id' element={<SuccessPayment />}/>

     </Routes>

    </div>
  );
}

export default App;
