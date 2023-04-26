import './App.css';
import { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Buttons from './pages/Buttons';
import Navbar from './pages/Navbar';
import Checkbox from './pages/Checkbox';
import Textbox from './pages/Textbox';
import RadioButton from './pages/RadioButton';

function App() {
  
  return (
    <BrowserRouter>   
      <Navbar />   
      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path='/buttons' element={<Buttons />} />   
        <Route path='/checkbox' element={<Checkbox />} />  
        <Route path='/textbox' element={<Textbox />} />    
        <Route path='/radiobutton' element={<RadioButton />} /> 
      </Routes>  
    </BrowserRouter>
    
  );
}

export default App;
