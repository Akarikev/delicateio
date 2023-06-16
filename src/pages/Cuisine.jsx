import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&cuisine=${name}`
    );

    const recipe = await data.json();
    setCuisine(recipe.result);
  };
  return (
    <div>
      {/* {cuisine.map((recipes) => {
        return <div key={recipes.id}>{recipes.title}</div>;
      })} */}
    </div>
  );
}

const Grid = styled.div``;

export default Cuisine;
