import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import HotelDetails from './pages/HotelDetails';
import Error from './pages/Error';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
