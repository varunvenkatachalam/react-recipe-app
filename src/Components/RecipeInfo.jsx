import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './style.css';

// let vId = "";
const RecipeInfo=()=>{
    const[item,setItem]=useState();
    const {MealId} = useParams();
    if(MealId!==""){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data.meals[0])
            setItem(data.meals[0]);
        })
    }
    if(item){
        // const url=item.strYoutube;
        // const str=url.split("=");
        // vId=str[str.length-1];
    }
    return(
        <>
            {
                (!item) ? "":(
                <>
                    <div className="content">
                        <img src={item.strMealThumb} alt="" />
                        <div className="inner-content">
                            <h1>{item.strMeal}</h1>
                            <h2>{item.strArea} Food</h2>
                            <h3>Catrgory {item.strCategory}</h3>
                        </div>
                    </div>
                    <div className="recipe-detials">
                        <div class="ingre-cont">
                        <div className="ingredients">
                            <h4>Ingredients</h4>
                        <ul>
                                {Object.keys(item).map(key => {
                                    if (key.includes("strIngredient") && item[key]) {
                                        const ingredientNumber = key.slice(-1);
                                        const measureKey = `strMeasure${ingredientNumber}`;
                                        return (
                                            <li key={ingredientNumber}>
                                                {item[key]}: {item[measureKey]}
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                            
                        </div>
                        <div className="instructions">
                            <h2>Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </div>
                        </div>
                
                        <div className="vedio">
                        <iframe
                            title="Recipe Video"
                            src={`https://www.youtube.com/embed/${item.strYoutube.slice(-11)}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                </>)
            }
        </>
    )
}
export default RecipeInfo;