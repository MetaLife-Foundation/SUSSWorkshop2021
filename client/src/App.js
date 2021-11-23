import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
