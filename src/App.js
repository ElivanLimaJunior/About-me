import './App.css';
import { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/banner';
import { Skills } from './components/Skills/skills';
import { Projects } from './components/Projects/projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOriginalText, setIsOriginalText] = useState(true);

  const handleChangeText = () => {
    setIsOriginalText(!isOriginalText);
  };

  return (
    <div className="App">
      <NavBar isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
      <Banner isOriginalText={isOriginalText} handleChangeText={handleChangeText} />
      <Skills isOriginalText={isOriginalText} />
      <Projects isOriginalText={isOriginalText}/>
    </div>
  );
}

export default App;
