// import { useState } from "react";

import "./App.css";
import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
