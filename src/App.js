import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { SearchUser } from './components/Search/SearchUser';
import { Profile } from './components/Profile/Users';
import { useSelector } from 'react-redux';
import { Login } from './components/Login/Login';
import { Protected } from './components/Protected/Protected';

function App() {
  const location =useLocation()
  const theme =useSelector((state)=>state.reducer.theme)
  console.log(theme)

  const dark ={backgroundColor:"black",color:"white"}
  const light ={color:"black"}

  
  return (
    <div className="app" style={theme?dark:light}>
      {location.pathname !=='/' && <Navbar />}
      <Routes>
      <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Protected Component={Home} />}/>
        <Route path='/search' element={<SearchUser/>}/>
        <Route path='/profile/:name' element={<Profile/>}/>


      </Routes>
     
      
    </div>
  );
}

export default App;
