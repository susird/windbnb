import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Cards } from './components/cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
}

export default App;
