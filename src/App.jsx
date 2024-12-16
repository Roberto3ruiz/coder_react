import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavbarComponent from "./components/NavbarComponent";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import CartView from "./components/CartView";
import Checkout from "./components/Checkout";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponent />
       
        <HeroBanner/>
       
        <Routes>

          <Route path='/' element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path='/:categoryId' element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path='/cart' element={<CartView />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>

        <Footer /> 
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
