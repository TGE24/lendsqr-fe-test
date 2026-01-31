import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login-image.png";
import Logo from "../assets/Logo.svg";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Navigate to users page after successful login
		navigate("/users");
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
				<img src={Logo} alt="Company Logo" className="login-logo-mobile" />
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

						<div className="form-group password-group">
							<input
								type={showPassword ? "text" : "password"}
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Password"
								required
							/>
							<button
								type="button"
								className="toggle-password"
								onClick={() => setShowPassword((prev) => !prev)}
								aria-label={showPassword ? "Hide password" : "Show password"}
							>
								{showPassword ? "HIDE" : "SHOW"}
							</button>
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
