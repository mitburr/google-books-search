import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/saved">Saved <span class="sr-only">(current)</span></a>
      </li>
    </ul>
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
    </nav>
  );
}

export default Nav;
