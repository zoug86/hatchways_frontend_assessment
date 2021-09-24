import Home from './pages/Home';
import { TagProvider } from './context/TagContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <TagProvider>
        <Home />
      </TagProvider>
    </div>
  );
}

export default App;
