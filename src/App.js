import './App.css';
import { UserList } from './components/UserList';
import { Routes, Route } from 'react-router-dom';
import { UserDetail } from './components/UserDetail';

function App() {
  const onDogSelectedHandler = (e) => {
    console.log('on dog selected', e);
  };

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Routes>
        <Route path="user" element={<UserList />} />
        <Route path="user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
