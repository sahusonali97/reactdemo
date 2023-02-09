import './App.css';
import LoginOut from './components/LoginOut';
import Auth from './components/Auth';
import Profile from "./components/Profile"
import Recipebook from './components/Recipebook';
// import Recipes from './components/Recipes';
// import Property from './components/Property';
// import PrtSearch from './components/PrtSearch';
function App() {

  return (
    <div className="App">
      
<LoginOut/>
<Auth/>
<Profile/>
<Recipebook/>
{/* <Recipes/> */}
{/* <Property/> */}
{/* <PrtSearch/> */}
    </div>
  );
}

export default App;
