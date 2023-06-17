import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchRecipe, setSearchRecipe] = useState([]);
  let params = useParams();
  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_API_KEY
      }&query=${name}`
    );

    const query = await data.json();
    setSearchRecipe(query.results);
  };

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchRecipe.map((search) => {
        return (
          <Card key={search.id}>
            <Link to={`/recipe/${search.id}`}>
              <img src={search.image} alt={search.title} />
              <h4>{search.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Searched;
