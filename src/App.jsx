import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Buttons from './pages/Buttons';
import Navbar from './pages/Navbar';
import Checkbox from './pages/Checkbox';
import Textbox from './pages/Textbox';
import RadioButton from './pages/RadioButton';
import WebTables from './pages/WebTables';
import Download from './pages/Download';
import Dynamic from './pages/Dynamic';
import Formulaire from './pages/Formulaire';
import ThanksMessage from './pages/RadioButtonYes';


function App() {
  
  return (
    <BrowserRouter basename="/demosite">   
      <Navbar />   
      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path='/buttons' element={<Buttons />} />   
        <Route path='/checkbox' element={<Checkbox />} />  
        <Route path='/textbox' element={<Textbox />} />    
        <Route path='/radiobutton' element={<RadioButton />} /> 
        <Route path='/webtables' element={<WebTables />} />
        <Route path='/download' element={<Download />} />
        <Route path='/dynamic' element={<Dynamic />} />
        <Route path='/formulaire' element={<Formulaire />} />
        <Route path='/radiobutton?like=yes' element={<ThanksMessage />} />
        <Route path='/radiobutton?like=no' element={<ThanksMessage />} />
      </Routes>  
    </BrowserRouter>
    
  );
}

export default App;
