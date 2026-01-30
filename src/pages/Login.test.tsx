import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Login from "../pages/Login";

describe("Login", () => {
	const renderLogin = () => {
		return render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>,
		);
	};

	it("renders login form", () => {
		renderLogin();
		expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
	});

	it("renders login button", () => {
		renderLogin();
		expect(screen.getByRole("button", { name: /log in/i })).toBeInTheDocument();
	});

	it("renders forgot password link", () => {
		renderLogin();
		expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
	});

	it("renders logo", () => {
		renderLogin();
		expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
	});
});
