
import ChefClaudeLogo from '../assets/chef-claude-icon.png';
function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={ChefClaudeLogo} alt="Chef Claude logo" />
      <h1 className="header-title">Chef Claude</h1>
    </header>
  );
}

export default Header;