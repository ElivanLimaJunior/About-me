import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from './routes';

function App() {
  const [isOriginalText, setIsOriginalText] = useState(true);

  const handleChangeText = () => {
    setIsOriginalText(!isOriginalText);
  };

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
