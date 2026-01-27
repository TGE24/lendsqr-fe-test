import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login-image.svg";
import Logo from "../assets/Logo.svg";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add authentication logic here
		console.log("Login attempt:", { email, password });
		// Navigate to dashboard after successful login
		navigate("/dashboard");
	};

	return (
		<div className="login-page">
			<div className="login-left">
				<img src={Logo} alt="Company Logo" className="login-logo" />
				<img
					src={loginImage}
					alt="Login Illustration"
					className="login-illustration"
				/>
			</div>
			<div className="login-right">
				<div className="login-container">
					<h1>Welcome.</h1>
					<p className="login-subtitle">Enter details to login.</p>

					<form onSubmit={handleSubmit} className="login-form">
						<div className="form-group">
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Email"
								required
							/>
						</div>

						<div className="form-group">
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								required
							/>
						</div>

						<p className="forgot-password">
							<a href="#">FORGOT PASSWORD?</a>
						</p>

						<button type="submit" className="login-button">
							Log In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
