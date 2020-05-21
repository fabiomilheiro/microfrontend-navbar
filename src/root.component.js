import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Navbar = (props) => {
  return (
    <BrowserRouter>
      <section>
        {props.name} is mounted!
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </section>
    </BrowserRouter>
  );
};

export { Navbar };
