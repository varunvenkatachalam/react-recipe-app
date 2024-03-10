import './App.css';
import Meal from './Components/Meal.jsx'
import './Components/style.css';
import './Components/style.css'
import {Routes,Route} from 'react-router-dom';
import RecipeInfo from './Components/RecipeInfo.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal/>} />
        <Route path="/:MealId" element={<RecipeInfo/>}/>
      </Routes>
      
    </>
  );
}

export default App;
