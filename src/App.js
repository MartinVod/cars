import './App.css';
import DriversMap from './components/DriversMap';
import DriversList from './components/DriversList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <div className="map-container">
            <DriversMap />
          </div>
          <div className="drivers-list">
            <DriversList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
