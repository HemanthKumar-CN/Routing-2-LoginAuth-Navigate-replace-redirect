import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Feeds from './pages/Feeds';
import Login from './pages/Login';
import RequireAuth from './HigherOrder/RequireAuth';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/feeds' element={ 
          <RequireAuth>
          <Feeds/>
          </RequireAuth>
        }/>
        <Route path='/posts' element={
        <RequireAuth>
        <Posts/>
        </RequireAuth>
      }/>
      </Routes>
    </div>
  );
}

export default App;
