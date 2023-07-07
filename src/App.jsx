import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelLists from './pages/HotelLists';
import HotelDetails from './pages/HotelDetails';
import Error from './pages/Error';
import ScrollToTop from './share/ScrollToTop';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelLists />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
