import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import './App.css'
function App() {
  return (
    <div className="App">     
      <header className="App-header">
       <Navbar/>
       <Home />
       <Products />
       <Footer />
      </header>
    </div>
  );
}

export default App;
