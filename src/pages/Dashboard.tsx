import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="dashboard-page">
			<h1>Dashboard</h1>
			<div className="dashboard-content">
				<div className="stats-grid">
					<div className="stat-card">
						<h3>Total Users</h3>
						<p className="stat-value">2,543</p>
						<span className="stat-change positive">+12%</span>
					</div>
					<div className="stat-card">
						<h3>Active Users</h3>
						<p className="stat-value">2,100</p>
						<span className="stat-change positive">+8%</span>
					</div>
					<div className="stat-card">
						<h3>Users with Loans</h3>
						<p className="stat-value">1,205</p>
						<span className="stat-change negative">-2%</span>
					</div>
					<div className="stat-card">
						<h3>Users with Savings</h3>
						<p className="stat-value">1,890</p>
						<span className="stat-change positive">+15%</span>
					</div>
				</div>

				<div className="quick-actions">
					<h2>Quick Actions</h2>
					<Link to="/users" className="action-button">
						View All Users
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
