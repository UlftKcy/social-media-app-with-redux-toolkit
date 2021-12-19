import React from "react";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav class="navbar navbar-dark bg-dark sticky-top">
      <div class="container-fluid d-flex justify-content-between px-5">
        <div>
          <a onClick={()=>{history.push("/")}} class="navbar-brand btn">
            Social App
          </a>
        </div>
        <div>
          <a onClick={()=>{history.push("/newpost")}} type="button" className="btn btn-warning">
            New Post
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
