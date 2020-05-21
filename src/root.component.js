import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Navbar = (props) => {
  return (
    <BrowserRouter>
      <section>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/products/1">Product 1</Link>
          </li>
          <li>
            <Link to="/products/2">Product 2</Link>
          </li>
        </ul>
      </section>
    </BrowserRouter>
  );
};

export default Navbar;
