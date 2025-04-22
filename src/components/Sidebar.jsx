import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link to="/data-dashboard-2" className="logo-link">
          <h2>Brewery Explorer</h2>
        </Link>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/data-dashboard-2" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <a
              href="https://www.openbrewerydb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              API Documentation
            </a>
          </li>
          <li>
            <a
              href="https://www.brewersassociation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Brewers Association
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>Data provided by Open Brewery DB</p>
      </div>
    </aside>
  );
}

export default Sidebar;
