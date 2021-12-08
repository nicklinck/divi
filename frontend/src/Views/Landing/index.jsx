import CircleCardComponent from '../../Components/Landing/CircleCardComponent/index';
import NavBarComponent from '../../Components/Landing/NavBarComponent/index';
import CentralCard from '../../Components/Landing/CentralCard/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <NavBarComponent />
      <CentralCard />
      <CircleCardComponent />
    </div>
  );
}

export default App;
