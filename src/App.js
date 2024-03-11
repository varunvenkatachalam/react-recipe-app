// import './App.css';
import Meal from './Components/Meal.jsx'
import './Components/style.css';
import './Components/style.css'
import {Routes,Route} from 'react-router-dom';
import RecipeInfo from './Components/RecipeInfo.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
// import Navbar  from './Components/navBar.jsx';
function App() {
  return (
    <>
      <Routes>
        {/* <Navbar/> */}
        <Route path="/" element={<Home/>} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/register" element={<Register/>} />
        <Route path="/meal" element={<Meal/>} />
        <Route path="/meal/:MealId" element={<RecipeInfo/>}/>
      </Routes>
      
    </>
  );
}

export default App;
