export default function Header({ cart }) {
  return (
    <>
      <div className="header">
        <nav className="menu">
          <div className="left-menu">
            <a href="#">Start Bootstrap</a> &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="#">Menu</a>
            <a href="#">About</a>
            <a href="#">Shop</a>
          </div>
          <div className="right-menu">
            <button id="btn">
              &#128722; Cart <span className="btn-count">{cart.length}</span>
            </button>
          </div>
        </nav>
      </div>
      <div className="hero">
        <h1>Shop in style</h1>
        <h4>with this shop homepage template</h4>
      </div>
    </>
  );
}
