import './App.css';
import { Users } from './components/Users';

function App() {
  const onDogSelectedHandler = (e) => {
    console.log('on dog selected', e);
  };

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Users />
    </div>
  );
}

export default App;
