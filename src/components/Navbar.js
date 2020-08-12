import React from "react";

function NavBar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h2>Navbar</h2>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={props.handleInputChange}
            value={props.value}
            id="search"
          />
          <button 
          class="btn btn-outline-success my-2 my-sm-0" 
          onClick={props.handleFormSubmit} 
          type="submit"
          placeholder="Search"/>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
