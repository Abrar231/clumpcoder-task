import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom';
import Ecommerce from './components/Ecommerce';
import ProFormLayout from './components/ProFormLayout';

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" red element={<Home />} /> */}
          <Route path="/" element={<Navigate to="/ecommerce" replace />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/proFormLayout" element={<ProFormLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
