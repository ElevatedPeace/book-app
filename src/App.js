import './App.css';
import { Routes, Route } from 'react-router-dom';
import Booklists from './components/BookLists';
import BookDetails from './components/BookDetails';
import Favorite from './components/Favorite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"  element={<Booklists/>} />
        <Route path="/books/:id"  element={<BookDetails/>} />
        <Route path="/favorite"  element={<Favorite/>} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
