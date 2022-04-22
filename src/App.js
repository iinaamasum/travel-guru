import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Pages/Auth/Login/Login';
import Register from './components/Pages/Auth/Register/Register';
import RequireAuth from './components/Pages/Auth/RequireAuth/RequireAuth';
import Booking from './components/Pages/Booking/Booking';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/booking"
          element={
            <RequireAuth>
              <Booking />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
