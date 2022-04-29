import { Routes, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <CustomLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      </CustomLayout>
    </BrowserRouter>
  );
}

export default App;
const CustomLayout = styled("div")`
	height: 100vh;
	background-color: #F0DEB4;
	padding-top: 0.1px;
`;