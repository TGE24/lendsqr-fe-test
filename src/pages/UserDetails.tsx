import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import UserHighlight from "../assets/user-highlight.svg";

const UserDetails = () => {
	const { id } = useParams<{ id: string }>();
	const [activeTab, setActiveTab] = useState("general");

	const tabs = [
		{ value: "general", label: "General Details" },
		{ value: "documents", label: "Documents" },
		{ value: "bank", label: "Bank Details" },
		{ value: "loans", label: "Loans" },
		{ value: "savings", label: "Savings" },
		{ value: "system", label: "App and System" },
	];

	// Mock user data - in a real app, this would be fetched based on the ID
	const user = {
		id,
		fullName: "Grace Effiom",
		username: "Grace Effiom",
		email: "grace@gmail.com",
		phoneNumber: "07060780922",
		bvn: "07060780922",
		gender: "Female",
		maritalStatus: "Single",
		children: "None",
		typeOfResidence: "Parent's Apartment",
		levelOfEducation: "B.Sc",
		employmentStatus: "Employed",
		sectorOfEmployment: "FinTech",
		durationOfEmployment: "2 years",
		officeEmail: "grace@lendsqr.com",
		monthlyIncome: "₦200,000.00 - ₦400,000.00",
		loanRepayment: "40,000",
		twitter: "@grace_effiom",
		facebook: "Grace Effiom",
		instagram: "@grace_effiom",
		guarantor: {
			fullName: "Debby Ogana",
			phoneNumber: "07060780922",
			email: "debby@gmail.com",
			relationship: "Sister",
		},
		accountBalance: "₦200,000.00",
		accountNumber: "9912981731",
		bank: "Providus Bank",
		userId: "LSQFf28715",
		userTier: 1,
	};

	return (
		<div className="user-details-page">
			<Link to="/users" className="back-link">
				<svg width="28" height="10" viewBox="0 0 28 10" fill="none">
					<path
						d="M0.94 5.94L4.88 9.88L6.06 8.7L3.62 6.26H28V4.62H3.62L6.06 2.18L4.88 1L0.94 4.94L0 5.88L0.94 5.94Z"
						fill="#545F7D"
					/>
				</svg>
				Back to Users
			</Link>

			<div className="page-header">
				<h1>User Details</h1>
				<div className="action-buttons">
					<button className="btn-blacklist">BLACKLIST USER</button>
					<button className="btn-activate">ACTIVATE USER</button>
				</div>
			</div>

			<div className="user-overview">
				<div className="user-profile-section">
					<div className="user-avatar-large">
						<img src={UserHighlight} alt="User Highlight" />
					</div>
					<div className="user-info">
						<h2>{user.fullName}</h2>
						<p className="user-id">{user.userId}</p>
					</div>
					<div className="user-tier">
						<p>User's Tier</p>
						<div className="star-rating">
							{[1, 2, 3].map((star) => (
								<svg
									key={star}
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill={star <= user.userTier ? "#E9B200" : "#E9E9E9"}
								>
									<path d="M8 0L10.163 5.38L16 6.236L12 10.09L13.09 16L8 13.038L2.91 16L4 10.09L0 6.236L5.837 5.38L8 0Z" />
								</svg>
							))}
						</div>
					</div>
					<div className="user-balance">
						<h3>{user.accountBalance}</h3>
						<p>
							{user.accountNumber}/{user.bank}
						</p>
					</div>
				</div>

				<div className="tabs">
					<select
						className="tabs-dropdown"
						value={activeTab}
						onChange={(e) => setActiveTab(e.target.value)}
					>
						{tabs.map((tab) => (
							<option key={tab.value} value={tab.value}>
								{tab.label}
							</option>
						))}
					</select>

					<div className="tabs-buttons">
						{tabs.map((tab) => (
							<button
								key={tab.value}
								className={`tab ${activeTab === tab.value ? "active" : ""}`}
								onClick={() => setActiveTab(tab.value)}
							>
								{tab.label}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="user-details-content">
				<section className="info-section">
					<h3 className="section-title">Personal Information</h3>
					<div className="info-grid">
						<div className="info-item">
							<p className="label">FULL NAME</p>
							<p className="value">{user.fullName}</p>
						</div>
						<div className="info-item">
							<p className="label">PHONE NUMBER</p>
							<p className="value">{user.phoneNumber}</p>
						</div>
						<div className="info-item">
							<p className="label">EMAIL ADDRESS</p>
							<p className="value">{user.email}</p>
						</div>
						<div className="info-item">
							<p className="label">BVN</p>
							<p className="value">{user.bvn}</p>
						</div>
						<div className="info-item">
							<p className="label">GENDER</p>
							<p className="value">{user.gender}</p>
						</div>
						<div className="info-item">
							<p className="label">MARITAL STATUS</p>
							<p className="value">{user.maritalStatus}</p>
						</div>
						<div className="info-item">
							<p className="label">CHILDREN</p>
							<p className="value">{user.children}</p>
						</div>
						<div className="info-item">
							<p className="label">TYPE OF RESIDENCE</p>
							<p className="value">{user.typeOfResidence}</p>
						</div>
					</div>
				</section>

				<section className="info-section">
					<h3 className="section-title">Education and Employment</h3>
					<div className="info-grid">
						<div className="info-item">
							<p className="label">LEVEL OF EDUCATION</p>
							<p className="value">{user.levelOfEducation}</p>
						</div>
						<div className="info-item">
							<p className="label">EMPLOYMENT STATUS</p>
							<p className="value">{user.employmentStatus}</p>
						</div>
						<div className="info-item">
							<p className="label">SECTOR OF EMPLOYMENT</p>
							<p className="value">{user.sectorOfEmployment}</p>
						</div>
						<div className="info-item">
							<p className="label">DURATION OF EMPLOYMENT</p>
							<p className="value">{user.durationOfEmployment}</p>
						</div>
						<div className="info-item">
							<p className="label">OFFICE EMAIL</p>
							<p className="value">{user.officeEmail}</p>
						</div>
						<div className="info-item">
							<p className="label">MONTHLY INCOME</p>
							<p className="value">{user.monthlyIncome}</p>
						</div>
						<div className="info-item">
							<p className="label">LOAN REPAYMENT</p>
							<p className="value">{user.loanRepayment}</p>
						</div>
					</div>
				</section>

				<section className="info-section">
					<h3 className="section-title">Socials</h3>
					<div className="info-grid">
						<div className="info-item">
							<p className="label">TWITTER</p>
							<p className="value">{user.twitter}</p>
						</div>
						<div className="info-item">
							<p className="label">FACEBOOK</p>
							<p className="value">{user.facebook}</p>
						</div>
						<div className="info-item">
							<p className="label">INSTAGRAM</p>
							<p className="value">{user.instagram}</p>
						</div>
					</div>
				</section>

				<section className="info-section">
					<h3 className="section-title">Guarantor</h3>
					<div className="info-grid">
						<div className="info-item">
							<p className="label">FULL NAME</p>
							<p className="value">{user.guarantor.fullName}</p>
						</div>
						<div className="info-item">
							<p className="label">PHONE NUMBER</p>
							<p className="value">{user.guarantor.phoneNumber}</p>
						</div>
						<div className="info-item">
							<p className="label">EMAIL ADDRESS</p>
							<p className="value">{user.guarantor.email}</p>
						</div>
						<div className="info-item">
							<p className="label">RELATIONSHIP</p>
							<p className="value">{user.guarantor.relationship}</p>
						</div>
					</div>
				</section>

				<section className="info-section">
					<h3 className="section-title"></h3>
					<div className="info-grid">
						<div className="info-item">
							<p className="label">FULL NAME</p>
							<p className="value">{user.guarantor.fullName}</p>
						</div>
						<div className="info-item">
							<p className="label">PHONE NUMBER</p>
							<p className="value">{user.guarantor.phoneNumber}</p>
						</div>
						<div className="info-item">
							<p className="label">EMAIL ADDRESS</p>
							<p className="value">{user.guarantor.email}</p>
						</div>
						<div className="info-item">
							<p className="label">RELATIONSHIP</p>
							<p className="value">{user.guarantor.relationship}</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default UserDetails;
