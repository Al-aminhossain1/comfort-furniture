
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Blog from './Components/Blog/Blog';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddInventory from './Components/AddInventory/AddInventory';
import NotFount from './Components/NotFount/NotFount';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer';
import MyItems from './Components/MyItems/MyItems';
import Dashboard from './Dashboard/Dashboard';
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
        <Route path='/manageInventory' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/addInventory' element={<AddInventory></AddInventory>}></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='*' element={<NotFount></NotFount>}></Route>
        {/* <Route path='/'element={}></Route>
        {/* <Route path='/'element={}></Route>
        <Route path='/'element={}></Route> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
