import './App.css';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
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
    <BrowserRouter>   
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Accueil />}/>
        <Route exact path='/buttons' element={<Buttons />} />   
        <Route exact path='/checkbox' element={<Checkbox />} />  
        <Route exact path='/textbox' element={<Textbox />} />    
        <Route exact path='/radiobutton' element={<RadioButton />} /> 
        <Route exact path='/webtables' element={<WebTables />} />
        <Route exact path='/download' element={<Download />} />
        <Route exact path='/dynamic' element={<Dynamic />} />
        <Route exact path='/formulaire' element={<Formulaire />} />    
        <Route path='/' element={<Navigate to='/home' replace />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;