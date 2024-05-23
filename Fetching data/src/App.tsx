import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersList from "./components/ClassComponent/ClassFetching";
import UserCard from "./components/FunctionComponent/FunctionFetching";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/users-list">
                  Users List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users-card">
                  Users Card
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/users-card" element={<UserCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
