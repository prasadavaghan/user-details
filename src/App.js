
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home';
import Detail from './component/Detail/Detail';
import Posts from './component/Detail/Posts/Posts';
import Gallery from './component/Detail/Gallery/Gallery';
import Todo from './component/Detail/Todo/Todo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:userId" element={<Detail />} />
        <Route path="details/posts" element={<Posts />} />
        <Route path="details/gallery" element={<Gallery />} />
        <Route path="details/todo" element={<Todo />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
