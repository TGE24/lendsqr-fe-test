import { useState } from "react";
import { Link } from "react-router-dom";

interface User {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	dateJoined: string;
	status: "active" | "inactive" | "pending" | "blacklisted";
}

const Users = () => {
	const [users] = useState<User[]>([
		{
			id: "1",
			name: "John Doe",
			email: "john.doe@example.com",
			phoneNumber: "+234 801 234 5678",
			dateJoined: "May 15, 2023",
			status: "active",
		},
		{
			id: "2",
			name: "Jane Smith",
			email: "jane.smith@example.com",
			phoneNumber: "+234 802 345 6789",
			dateJoined: "Jun 20, 2023",
			status: "active",
		},
		{
			id: "3",
			name: "Bob Johnson",
			email: "bob.johnson@example.com",
			phoneNumber: "+234 803 456 7890",
			dateJoined: "Jul 10, 2023",
			status: "inactive",
		},
		{
			id: "4",
			name: "Alice Williams",
			email: "alice.williams@example.com",
			phoneNumber: "+234 804 567 8901",
			dateJoined: "Aug 5, 2023",
			status: "pending",
		},
		{
			id: "5",
			name: "Charlie Brown",
			email: "charlie.brown@example.com",
			phoneNumber: "+234 805 678 9012",
			dateJoined: "Sep 1, 2023",
			status: "blacklisted",
		},
	]);

	const getStatusClass = (status: string) => {
		return `status-badge ${status}`;
	};

	return (
		<div className="users-page">
			<div className="users-header">
				<h1>Users</h1>
				<button className="add-user-button">Add User</button>
			</div>

			<div className="users-table-container">
				<table className="users-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone Number</th>
							<th>Date Joined</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.phoneNumber}</td>
								<td>{user.dateJoined}</td>
								<td>
									<span className={getStatusClass(user.status)}>
										{user.status}
									</span>
								</td>
								<td>
									<Link to={`/users/${user.id}`} className="view-details">
										View Details
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
