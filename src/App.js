import { Routes, Route } from 'react-router-dom';
import ToDoList from './pages/home';
import './App.css';

const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<ToDoList />} />
           {/* <Route path="/products" element={<Products />} />
           <Route path="/about" element={<About />} /> */}
        </Routes>
     </>
  );
 };

export default App;
