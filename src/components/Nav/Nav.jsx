function Nav(props) {
  return (
    <nav className="nav-wrapper">
      <div className="nav-logo">Logo</div>
      <div className="nav-btn-group">
        {props.pages.map((page) => (
          <button
            key={page}
            className="nav-btn"
            onClick={(event) => props.handleNav(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
