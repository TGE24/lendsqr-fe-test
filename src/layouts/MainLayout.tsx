import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

const MainLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogout = () => {
		// Add logout logic here
		navigate("/");
	};

	const isActive = (path: string) => {
		return location.pathname === path ? "active" : "";
	};

	return (
		<div className="main-layout">
			<header className="header">
				<div className="header-content">
					<h2 className="logo">Lendsqr</h2>
					<nav className="nav">
						<Link to="/dashboard" className={isActive("/dashboard")}>
							Dashboard
						</Link>
						<Link to="/users" className={isActive("/users")}>
							Users
						</Link>
					</nav>
					<button onClick={handleLogout} className="logout-button">
						Logout
					</button>
				</div>
			</header>

			<main className="main-content">
				<div className="content-wrapper">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default MainLayout;
