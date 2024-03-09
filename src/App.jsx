import './App.css';
import Particles from './components/Particle';
import NavigationBar from './components/NavigationBar';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <Particles id="tsparticles"/>
      <NavigationBar/>
      <Introduction/>
    </div>
  );
}

export default App;