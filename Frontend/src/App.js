import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/layout';
import Home from './pages/home';
import Message from './pages/message'
import Login from './pages/login'
import Friend from './pages/friend'

function App() {
  return (
    <div className="App">
       <Layout>
        <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path="/message" element={<Message />} />
              <Route path='/login' element={<Login />}/>
              <Route path='/friend-list' element={<Friend />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;