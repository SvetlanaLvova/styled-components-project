import styled from 'styled-components'
import Category from './components/Category';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Route, Routes } from "react-router-dom";
import Vegetables from './components/SubCategories/Vegetables';
import Fruits from './components/SubCategories/Fruits';
import Bread from './components/SubCategories/Bread';
import Berries from './components/SubCategories/Berries';

function App() {
  return (
    <div className="App">
    <Nav/>    
    <Footer/>
    <Routes>
      <Route path="/" element={ <Category/> } />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/berries" element={<Berries />} />
    </Routes>
    </div>
  );
}

export default App;
