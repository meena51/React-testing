import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator';
import WeatherApp from './components/weather/WeatherApp';
// function App() {
//   const [input,setInput] =useState('');
//   return (
//     <div className="App">
//       <h1>Functional Testing</h1>
//       <button data-testid='btn-1' onClick={()=>setInput('hello')}>Update Data</button>
//          <input type='text'  name='firstName'  placeholder='Yourname' onChange={(e)=>{
//         setInput(e.target.value);}}
//           />
      

//     </div> 
//   );
// }
const App = (props) => {
  return (
    <div>
      <WeatherApp/>
      
    </div>
  )
}

export default App;
