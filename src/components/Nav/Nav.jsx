import Logo from "../../Assets/logo.png";

function Nav({ pages, handleNav }) {
  return (
    <nav className="nav-wrapper">
      <div
        className="nav-logo"
        style={{
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div>
        <span className="greeting-h1">Hello, Emit!</span>
      </div>
      <div className="nav-btn-group">
        {pages.map((page) => (
          <button
            key={page}
            className="nav-btn"
            onClick={() => handleNav(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
