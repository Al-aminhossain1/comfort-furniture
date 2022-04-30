
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
// import RequireAuth from './Components/RequireAuth/RequireAuth';
// import RequireAuth from './Components/RequireAuth/RequireAuth'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/'element={}></Route>
        <Route path='/'element={}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
