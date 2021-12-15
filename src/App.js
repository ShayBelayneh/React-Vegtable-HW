import logo from './logo.svg';
import './App.css';
import Logo from './components/logim/Logo';
import Addveg from './components/AddVeg/Add/Add';
import Fruit from './components/Fruits/Fruit';
import Spice from './components/Spices/Spice';
import Can from './components/Cans/Can';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Addveg/>
      <Fruit/>
      <Spice/>
      <Can/>
    </div>
  );
}

export default App;