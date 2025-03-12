import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Post from "./components/Post";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className='bg-gray-800 min-h-screen flex flex-col'>
        <Header />

        <main className='flex-grow p-6'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/post' element={<Post />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route
              path='*'
              element={<h2 className='text-white'>Page Not Found</h2>}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
