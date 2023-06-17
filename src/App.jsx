import "./App.css";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKiwiFruit } from "react-icons/gi";
function App() {
  return (
    <div>
      <Router>
        <Nav>
          <GiKiwiFruit />
          <Logo to={`/`}>delicate//</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Inter;
  color: black;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;
