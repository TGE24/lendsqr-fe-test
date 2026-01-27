import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();

	// Mock user data - in a real app, this would be fetched based on the ID
	const user = {
		id,
		name: "John Doe",
		email: "john.doe@example.com",
		phoneNumber: "+234 801 234 5678",
		dateJoined: "May 15, 2023",
		status: "active",
		address: "123 Main Street, Lagos, Nigeria",
		accountNumber: "1234567890",
		bankName: "Example Bank",
		bvn: "12345678901",
		gender: "Male",
		maritalStatus: "Single",
		children: "None",
		typeOfResidence: "Parent's Apartment",
		levelOfEducation: "B.Sc",
		employmentStatus: "Employed",
		sectorOfEmployment: "FinTech",
		durationOfEmployment: "2 years",
		officeEmail: "john.doe@company.com",
		monthlyIncome: "₦200,000 - ₦400,000",
		loanRepayment: "₦40,000",
	};

	return (
		<div className="user-details-page">
			<button className="back-button" onClick={() => navigate("/users")}>
				← Back to Users
			</button>

			<div className="user-header">
				<div className="user-avatar">
					<span>{user.name.charAt(0)}</span>
				</div>
				<div className="user-basic-info">
					<h1>{user.name}</h1>
					<p className="user-id">User ID: {user.id}</p>
				</div>
				<div className="user-actions">
					<button className="btn-blacklist">Blacklist User</button>
					<button className="btn-activate">Activate User</button>
				</div>
			</div>

			<div className="details-tabs">
				<button className="tab active">General Details</button>
				<button className="tab">Documents</button>
				<button className="tab">Bank Details</button>
				<button className="tab">Loans</button>
				<button className="tab">Savings</button>
			</div>

			<div className="details-content">
				<section className="details-section">
					<h2>Personal Information</h2>
					<div className="details-grid">
						<div className="detail-item">
							<span className="label">Full Name</span>
							<span className="value">{user.name}</span>
						</div>
						<div className="detail-item">
							<span className="label">Phone Number</span>
							<span className="value">{user.phoneNumber}</span>
						</div>
						<div className="detail-item">
							<span className="label">Email Address</span>
							<span className="value">{user.email}</span>
						</div>
						<div className="detail-item">
							<span className="label">BVN</span>
							<span className="value">{user.bvn}</span>
						</div>
						<div className="detail-item">
							<span className="label">Gender</span>
							<span className="value">{user.gender}</span>
						</div>
						<div className="detail-item">
							<span className="label">Marital Status</span>
							<span className="value">{user.maritalStatus}</span>
						</div>
						<div className="detail-item">
							<span className="label">Children</span>
							<span className="value">{user.children}</span>
						</div>
						<div className="detail-item">
							<span className="label">Type of Residence</span>
							<span className="value">{user.typeOfResidence}</span>
						</div>
					</div>
				</section>

				<section className="details-section">
					<h2>Education and Employment</h2>
					<div className="details-grid">
						<div className="detail-item">
							<span className="label">Level of Education</span>
							<span className="value">{user.levelOfEducation}</span>
						</div>
						<div className="detail-item">
							<span className="label">Employment Status</span>
							<span className="value">{user.employmentStatus}</span>
						</div>
						<div className="detail-item">
							<span className="label">Sector of Employment</span>
							<span className="value">{user.sectorOfEmployment}</span>
						</div>
						<div className="detail-item">
							<span className="label">Duration of Employment</span>
							<span className="value">{user.durationOfEmployment}</span>
						</div>
						<div className="detail-item">
							<span className="label">Office Email</span>
							<span className="value">{user.officeEmail}</span>
						</div>
						<div className="detail-item">
							<span className="label">Monthly Income</span>
							<span className="value">{user.monthlyIncome}</span>
						</div>
						<div className="detail-item">
							<span className="label">Loan Repayment</span>
							<span className="value">{user.loanRepayment}</span>
						</div>
					</div>
				</section>

				<section className="details-section">
					<h2>Bank Details</h2>
					<div className="details-grid">
						<div className="detail-item">
							<span className="label">Account Number</span>
							<span className="value">{user.accountNumber}</span>
						</div>
						<div className="detail-item">
							<span className="label">Bank Name</span>
							<span className="value">{user.bankName}</span>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default UserDetails;
