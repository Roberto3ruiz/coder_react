import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavbarComponent from "./components/NavbarComponent";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavbarComponent />
      <ItemListContainer greeting='Bienvenidos' />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
