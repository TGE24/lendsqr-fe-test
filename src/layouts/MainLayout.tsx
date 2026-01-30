import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import Logo from "../assets/Logo.svg";
import UsersIcon from "../components/Icons/Users";
import GuarantorsIcon from "../components/Icons/Guarantors";
import LoansIcon from "../components/Icons/Loans";
import HandshakeIcon from "../components/Icons/Handshake";
import SavingsIcon from "../components/Icons/Savings";
import LoanRequestIcon from "../components/Icons/LoanRequest";
import WhitelistIcon from "../components/Icons/Whitelist";
import KarmaIcon from "../components/Icons/KarmaIcon";
import DashboardIcon from "../components/Icons/Dashboard";
import BankIcon from "../components/Icons/BankIcon";
import FeesIcon from "../components/Icons/FeesIcon";
import TransactionsIcon from "../components/Icons/TransactionsIcon";
import ServicesIcon from "../components/Icons/ServicesIcon";
import ServiceAccountIcon from "../components/Icons/ServiceAccountIcon";
import SettlementIcon from "../components/Icons/SettlementIcon";
import ReportsIcon from "../components/Icons/ReportsIcon";
import PreferencesIcon from "../components/Icons/PreferencesIcon";
import FeesAndPricingIcon from "../components/Icons/FeesAndPricingIcon";
import AuditLogsIcon from "../components/Icons/AuditLogsIcon";
import BriefcaseIcon from "../components/Icons/Briefcase";
import UserAvater from "../assets/user-avatar.png";

const MainLayout = () => {
	const location = useLocation();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const isActive = (path: string) => {
		return location.pathname === path ? "active" : "";
	};

	useClickOutside(mobileMenuRef, () => setIsMobileMenuOpen(false));

	return (
		<div className="main-layout">
			<header className="header">
				<div className="header-content">
					<button
						className="hamburger-btn"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path
								d="M3 12H21M3 6H21M3 18H21"
								stroke="#213F7D"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>

					<img src={Logo} alt="Company Logo" className="logo" />

					<div className="search-bar">
						<input
							type="text"
							placeholder="Search for anything"
							className="search-input"
						/>
						<button className="search-button">
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path
									d="M5.5 0C2.46 0 0 2.46 0 5.5C0 8.54 2.46 11 5.5 11C6.61 11 7.63 10.64 8.47 10.04L12.71 14.29C13.1 14.68 13.73 14.68 14.12 14.29C14.51 13.9 14.51 13.27 14.12 12.88L9.87 8.63C10.47 7.79 10.83 6.77 10.83 5.66C10.83 2.62 8.37 0.16 5.33 0.16L5.5 0ZM5.5 2C7.43 2 9 3.57 9 5.5C9 7.43 7.43 9 5.5 9C3.57 9 2 7.43 2 5.5C2 3.57 3.57 2 5.5 2Z"
									fill="white"
								/>
							</svg>
						</button>
					</div>

					<div className="header-actions">
						<a href="#" className="docs-link">
							Docs
						</a>
						<button className="notification-bell">
							<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
								<path
									d="M20.7 18.9V11.7C20.7 7.6 17.7 4.2 13.8 3.4V2.6C13.8 1.7 13.1 1 12.2 1C11.3 1 10.6 1.7 10.6 2.6V3.4C6.7 4.2 3.7 7.6 3.7 11.7V18.9L1.5 21.1V22.3H22.9V21.1L20.7 18.9ZM18.5 20.1H5.9V11.7C5.9 8.2 8.7 5.4 12.2 5.4C15.7 5.4 18.5 8.2 18.5 11.7V20.1ZM12.2 25.7C13.5 25.7 14.6 24.6 14.6 23.3H9.8C9.8 24.6 10.9 25.7 12.2 25.7Z"
									fill="#213F7D"
								/>
							</svg>
						</button>
						<div className="user-profile">
							<img src={UserAvater} alt="User" className="user-avatar" />
							<span className="user-name">Adedeji</span>
							<svg width="8" height="5" viewBox="0 0 8 5" fill="none">
								<path d="M1 0.5L4 3.5L7 0.5" stroke="#213F7D" strokeWidth="2" />
							</svg>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			<div
				className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
				ref={mobileMenuRef}
			>
				<div className="switch-org">
					<BriefcaseIcon />
					<span>Switch Organization</span>
					<svg width="8" height="5" viewBox="0 0 8 5" fill="none">
						<path d="M1 0.5L4 3.5L7 0.5" stroke="#213F7D" strokeWidth="1.5" />
					</svg>
				</div>
				<nav className="sidebar-nav">
					<div className="nav-section">
						<Link
							to="/dashboard"
							className={`nav-item ${isActive("/dashboard")}`}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							<DashboardIcon />
							<span>Dashboard</span>
						</Link>
					</div>

					<div className="nav-section">
						<h3 className="nav-section-title">CUSTOMERS</h3>
						{CustomerNavItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`nav-item ${isActive(item.path)}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.icon}
								<span>{item.name}</span>
							</Link>
						))}
					</div>

					<div className="nav-section">
						<h3 className="nav-section-title">BUSINESSES</h3>
						{BusinessNavItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`nav-item ${isActive(item.path)}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.icon}
								<span>{item.name}</span>
							</Link>
						))}
					</div>

					<div className="nav-section">
						<h3 className="nav-section-title">SETTINGS</h3>
						{SettingsNavItems.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={`nav-item ${isActive(item.path)}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.icon}
								<span>{item.name}</span>
							</Link>
						))}
					</div>
				</nav>
			</div>

			<div className="layout-body">
				<aside className="sidebar">
					<div className="switch-org">
						<BriefcaseIcon />
						<span>Switch Organization</span>
						<svg width="8" height="5" viewBox="0 0 8 5" fill="none">
							<path d="M1 0.5L4 3.5L7 0.5" stroke="#213F7D" strokeWidth="1.5" />
						</svg>
					</div>
					<nav className="sidebar-nav">
						<div className="nav-section">
							{" "}
							<Link
								to="/dashboard"
								className={`nav-item ${isActive("/dashboard")}`}
							>
								<DashboardIcon />
								<span>Dashboard</span>
							</Link>
						</div>

						<div className="nav-section">
							<h3 className="nav-section-title">CUSTOMERS</h3>
							{CustomerNavItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className={`nav-item ${isActive(item.path)}`}
								>
									{item.icon}
									<span>{item.name}</span>
								</Link>
							))}
						</div>

						<div className="nav-section">
							<h3 className="nav-section-title">BUSINESSES</h3>
							{BusinessNavItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className={`nav-item ${isActive(item.path)}`}
								>
									{item.icon}
									<span>{item.name}</span>
								</Link>
							))}
						</div>

						<div className="nav-section">
							<h3 className="nav-section-title">SETTINGS</h3>
							{SettingsNavItems.map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className={`nav-item ${isActive(item.path)}`}
								>
									{item.icon}
									<span>{item.name}</span>
								</Link>
							))}
						</div>
					</nav>
				</aside>

				<main className="main-content">
					<div className="content-wrapper">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default MainLayout;

const CustomerNavItems = [
	{ name: "Users", path: "/users", icon: <UsersIcon /> },
	{ name: "Guarantors", path: "/guarantors", icon: <GuarantorsIcon /> },
	{ name: "Loans", path: "/loans", icon: <LoansIcon /> },
	{
		name: "Decision Models",
		path: "/decision-models",
		icon: <HandshakeIcon />,
	},
	{ name: "Savings", path: "/savings", icon: <SavingsIcon /> },
	{ name: "Loan Requests", path: "/loan-requests", icon: <LoanRequestIcon /> },
	{ name: "Whitelist", path: "/whitelist", icon: <WhitelistIcon /> },
	{ name: "Karma", path: "/karma", icon: <KarmaIcon /> },
];

const BusinessNavItems = [
	{ name: "Organization", path: "/organization", icon: <DashboardIcon /> },
	{ name: "Loan Products", path: "/loan-products", icon: <LoanRequestIcon /> },
	{ name: "Savings Products", path: "/savings-products", icon: <BankIcon /> },
	{ name: "Fees and Charges", path: "/fees-charges", icon: <FeesIcon /> },
	{ name: "Transactions", path: "/transactions", icon: <TransactionsIcon /> },
	{ name: "Services", path: "/services", icon: <ServicesIcon /> },
	{
		name: "Service Account",
		path: "/service-account",
		icon: <ServiceAccountIcon />,
	},
	{ name: "Settlements", path: "/settlements", icon: <SettlementIcon /> },
	{ name: "Reports", path: "/reports", icon: <ReportsIcon /> },
];

const SettingsNavItems = [
	{ name: "Preferences", path: "/preferences", icon: <PreferencesIcon /> },
	{
		name: "Fees and Pricing",
		path: "/fees-pricing",
		icon: <FeesAndPricingIcon />,
	},
	{ name: "Audit Logs", path: "/audit-logs", icon: <AuditLogsIcon /> },
];
