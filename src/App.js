import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import PropertyList from './components/propertyList/PropertyList';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotels' element={<List/>}/>
    <Route path='/hotel' element={<Hotel/>}/>
    <Route path='/property' element={<PropertyList/>}/>

    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
