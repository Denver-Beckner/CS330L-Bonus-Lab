function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <div className="navbar-nav">
          <a className="nav-link active" href="#">Home</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">Dropdown link</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;