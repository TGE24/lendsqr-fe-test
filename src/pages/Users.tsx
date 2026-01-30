import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";
import UsersIcon from "../assets/users.svg";
import ActiveUsersIcon from "../assets/active-users.svg";
import LoansIcon from "../assets/users-loans.svg";
import SavingsIcon from "../assets/users-savings.svg";
import FunnelIcon from "../assets/funnel.svg";
import PrevIcon from "../assets/prev-btn.svg";
import NextIcon from "../assets/next-btn.svg";

interface User {
	id: string;
	organization: string;
	username: string;
	email: string;
	phoneNumber: string;
	dateJoined: string;
	status: "active" | "inactive" | "pending" | "blacklisted";
}

type SortField = keyof User;
type SortOrder = "asc" | "desc" | null;

const Users = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	const [showFilter, setShowFilter] = useState(false);
	const [showActionMenu, setShowActionMenu] = useState<string | null>(null);
	const [sortField, setSortField] = useState<SortField | null>(null);
	const [sortOrder, setSortOrder] = useState<SortOrder>(null);
	const filterRef = useRef<HTMLDivElement>(null);
	const actionMenuRef = useRef<HTMLDivElement>(null);

	// Fetch users data
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(
					"https://api.json-generator.com/templates/QQIGNxaJTRMv/data",
					{
						headers: {
							Authorization: "Bearer r019ybq4upro027mo5g4m4uznm0y4c3bdh0en2xx",
						},
					},
				);
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				// Silently handle error - could add error state here if needed
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	// Close filter when clicking outside
	useClickOutside(filterRef, () => setShowFilter(false));

	// Close action menu when clicking outside
	useClickOutside(actionMenuRef, () => setShowActionMenu(null));

	const handleSortClick = (field: SortField) => {
		const newOrder: SortOrder =
			sortField === field && sortOrder === "asc" ? "desc" : "asc";

		setSortField(field);
		setSortOrder(newOrder);

		const sortedUsers = [...users].sort((a, b) => {
			const aValue = a[field];
			const bValue = b[field];

			if (aValue < bValue) return newOrder === "asc" ? -1 : 1;
			if (aValue > bValue) return newOrder === "asc" ? 1 : -1;
			return 0;
		});

		setUsers(sortedUsers);
	};

	const handleFilterClick = () => {
		setShowFilter(!showFilter);
	};

	const handleActionMenuClick = (userId: string) => {
		setShowActionMenu(showActionMenu === userId ? null : userId);
	};

	const handleRowClick = (userId: string) => {
		navigate(`/users/${userId}`);
	};

	// Pagination logic
	const totalPages = Math.ceil(users.length / itemsPerPage);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleItemsPerPageChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setItemsPerPage(Number(e.target.value));
		setCurrentPage(1);
	};

	const getPageNumbers = () => {
		const pages: (number | string)[] = [];
		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			if (currentPage <= 3) {
				for (let i = 1; i <= 4; i++) pages.push(i);
				pages.push("...");
				pages.push(totalPages);
			} else if (currentPage >= totalPages - 2) {
				pages.push(1);
				pages.push("...");
				for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
			} else {
				pages.push(1);
				pages.push("...");
				for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
				pages.push("...");
				pages.push(totalPages);
			}
		}
		return pages;
	};

	return (
		<div className="users-page">
			<h1>Users</h1>

			<div className="stats-cards">
				<div className="stat-card">
					<div className="stat-icon users-icon">
						<img src={UsersIcon} alt="Users" />
					</div>
					<p className="stat-label">USERS</p>
					<p className="stat-value">{users.length.toLocaleString()}</p>
				</div>

				<div className="stat-card">
					<div className="stat-icon active-users-icon">
						<img src={ActiveUsersIcon} alt="Active Users" />
					</div>
					<p className="stat-label">ACTIVE USERS</p>
					<p className="stat-value">
						{users.filter((u) => u.status === "active").length.toLocaleString()}
					</p>
				</div>

				<div className="stat-card">
					<div className="stat-icon loans-icon">
						<img src={LoansIcon} alt="Users with Loans" />
					</div>
					<p className="stat-label">USERS WITH LOANS</p>
					<p className="stat-value">{users.length.toLocaleString()}</p>
				</div>

				<div className="stat-card">
					<div className="stat-icon savings-icon">
						<img src={SavingsIcon} alt="Users with Savings" />
					</div>
					<p className="stat-label">USERS WITH SAVINGS</p>
					<p className="stat-value">{users.length.toLocaleString()}</p>
				</div>
			</div>

			<div className="table-header-actions">
				<button className="filter-modal-btn" onClick={handleFilterClick}>
					<img src={FunnelIcon} alt="Filter" />
					Filter
				</button>

				{showFilter && (
					<div className="filter-popup" ref={filterRef}>
						<form>
							<div className="form-group">
								<label>Organization</label>
								<select>
									<option value="">Select</option>
									<option value="lendsqr">Lendsqr</option>
									<option value="irorun">Irorun</option>
									<option value="lendstar">Lendstar</option>
								</select>
							</div>

							<div className="form-group">
								<label>Username</label>
								<input type="text" placeholder="User" />
							</div>

							<div className="form-group">
								<label>Email</label>
								<input type="email" placeholder="Email" />
							</div>

							<div className="form-group">
								<label>Date</label>
								<input type="date" placeholder="Date" />
							</div>

							<div className="form-group">
								<label>Phone Number</label>
								<input type="tel" placeholder="Phone Number" />
							</div>

							<div className="form-group">
								<label>Status</label>
								<select>
									<option value="">Select</option>
									<option value="active">Active</option>
									<option value="inactive">Inactive</option>
									<option value="pending">Pending</option>
									<option value="blacklisted">Blacklisted</option>
								</select>
							</div>

							<div className="filter-actions">
								<button type="reset" className="btn-reset">
									Reset
								</button>
								<button type="submit" className="btn-filter">
									Filter
								</button>
							</div>
						</form>
					</div>
				)}
			</div>

			{loading ? (
				<div className="loading-container">
					<p>Loading users...</p>
				</div>
			) : (
				<div className="users-table-container">
					<table className="users-table">
						<thead>
							<tr>
								<th>
									ORGANIZATION
									<button
										className="filter-btn"
										onClick={() => handleSortClick("organization")}
									>
										<img src={FunnelIcon} alt="Sort" />
									</button>
								</th>
								<th>
									USERNAME
									<button
										className="filter-btn"
										onClick={() => handleSortClick("username")}
									>
										<img src={FunnelIcon} alt="Sort" />
									</button>
								</th>
								<th>
									EMAIL
									<button
										className="filter-btn"
										onClick={() => handleSortClick("email")}
									>
										<img src={FunnelIcon} alt="Sort" />
									</button>
								</th>
								<th>PHONE NUMBER</th>
								<th>
									DATE JOINED
									<button
										className="filter-btn"
										onClick={() => handleSortClick("dateJoined")}
									>
										<img src={FunnelIcon} alt="Sort" />
									</button>
								</th>
								<th>STATUS</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{currentUsers.map((user) => (
								<tr
									key={user.id}
									className="clickable-row"
									onClick={() => handleRowClick(user.id)}
								>
									<td>{user.organization}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phoneNumber}</td>
									<td>{user.dateJoined}</td>
									<td>
										<span className={`status-badge status-${user.status}`}>
											{user.status.charAt(0).toUpperCase() +
												user.status.slice(1)}
										</span>
									</td>
									<td className="action-cell">
										<button
											className="menu-btn"
											onClick={(e) => {
												e.stopPropagation();
												handleActionMenuClick(user.id);
											}}
										>
											<svg width="4" height="16" viewBox="0 0 4 16" fill="none">
												<circle cx="2" cy="2" r="2" fill="#545F7D" />
												<circle cx="2" cy="8" r="2" fill="#545F7D" />
												<circle cx="2" cy="14" r="2" fill="#545F7D" />
											</svg>
										</button>

										{showActionMenu === user.id && (
											<div className="action-menu" ref={actionMenuRef}>
												<Link to={`/users/${user.id}`} className="menu-item">
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 12"
														fill="none"
													>
														<path
															d="M8 0C4.5 0 1.5 2.5 0 6C1.5 9.5 4.5 12 8 12C11.5 12 14.5 9.5 16 6C14.5 2.5 11.5 0 8 0ZM8 10C6.3 10 5 8.7 5 7C5 5.3 6.3 4 8 4C9.7 4 11 5.3 11 7C11 8.7 9.7 10 8 10Z"
															fill="#545F7D"
														/>
													</svg>
													View Details
												</Link>
												<button className="menu-item">
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
													>
														<path
															d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11 9H5V7H11V9Z"
															fill="#545F7D"
														/>
													</svg>
													Blacklist User
												</button>
												<button className="menu-item">
													<svg
														width="16"
														height="16"
														viewBox="0 0 16 16"
														fill="none"
													>
														<path
															d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM11 9H9V11H7V9H5V7H7V5H9V7H11V9Z"
															fill="#545F7D"
														/>
													</svg>
													Activate User
												</button>
											</div>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}

			<div className="pagination">
				<div className="pagination-info">
					Showing
					<select
						className="per-page-select"
						value={itemsPerPage}
						onChange={handleItemsPerPageChange}
					>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>
					out of {users.length}
				</div>
				<div className="pagination-controls">
					<button
						className="page-btn"
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						<img src={PrevIcon} alt="Previous" />
					</button>
					{getPageNumbers().map((page, index) =>
						typeof page === "number" ? (
							<button
								key={index}
								className={`page-btn ${currentPage === page ? "active" : ""}`}
								onClick={() => handlePageChange(page)}
							>
								{page}
							</button>
						) : (
							<span key={index}>{page}</span>
						),
					)}
					<button
						className="page-btn"
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
					>
						<img src={NextIcon} alt="Next" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Users;
