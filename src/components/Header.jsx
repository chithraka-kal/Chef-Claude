import './Header.css';
function Header() {
  return (
    <div className="header">
      <img className="header-logo" src="./src/assets/chef-claude-icon.png" alt="Chef Claude logo" />
      <h1 className="header-title">Chef Claude</h1>
    </div>
  );
}

export default Header;