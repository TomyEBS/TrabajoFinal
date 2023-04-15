import './App.css';
import { Routes ,Route,} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/navegacion/navbar';
import Inicio from './components/pages/Inicio';
import Tienda from './components/pages/Tienda';
import Items from './components/pages/items';


function App(){


  return(
    <div className='App'>
    
    <Router>
     <NavBar/>
    <Routes>
    <Route path='/' element={<Inicio/>} />
    <Route path='/Tienda' element={<Tienda/>} />
    <Route path='/items' element={<Items/>} />
    </Routes>
    </Router>



    </div>
  )
}



export default App;
