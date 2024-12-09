import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavbarComponent from "./components/NavbarComponent";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>

          <Route path='/' element={<ItemListContainer greeting='Bienvenidos' />} />
          <Route path='/:categoryId' element={<ItemListContainer greeting='Bienvenidos' />} />

          <Route path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>


      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
