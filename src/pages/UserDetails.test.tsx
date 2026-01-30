import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import UserDetails from "../pages/UserDetails";

// Mock useParams
vi.mock("react-router-dom", async () => {
	const actual = await vi.importActual("react-router-dom");
	return {
		...actual,
		useParams: () => ({ id: "1" }),
	};
});

describe("UserDetails", () => {
	const renderUserDetails = () => {
		return render(
			<BrowserRouter>
				<UserDetails />
			</BrowserRouter>,
		);
	};

	it("renders user details page", () => {
		renderUserDetails();
		expect(screen.getByText(/user details/i)).toBeInTheDocument();
	});

	it("renders back to users link", () => {
		renderUserDetails();
		expect(screen.getByText(/back to users/i)).toBeInTheDocument();
	});

	it("renders user action buttons", () => {
		renderUserDetails();
		expect(
			screen.getByRole("button", { name: /blacklist user/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /activate user/i }),
		).toBeInTheDocument();
	});

	it("renders user profile information", () => {
		renderUserDetails();
		const graceElements = screen.getAllByText("Grace Effiom");
		expect(graceElements.length).toBeGreaterThan(0);
	});

	it("renders tabs section", () => {
		renderUserDetails();
		// Check for both dropdown and button tabs
		const generalDetailsElements = screen.getAllByText(/general details/i);
		expect(generalDetailsElements.length).toBeGreaterThan(0);
		const documentsElements = screen.getAllByText(/documents/i);
		expect(documentsElements.length).toBeGreaterThan(0);
		const bankDetailsElements = screen.getAllByText(/bank details/i);
		expect(bankDetailsElements.length).toBeGreaterThan(0);
	});

	it("renders personal information section", () => {
		renderUserDetails();
		expect(screen.getByText(/personal information/i)).toBeInTheDocument();
		const fullNameElements = screen.getAllByText(/full name/i);
		expect(fullNameElements[0]).toBeInTheDocument();
		const phoneElements = screen.getAllByText(/phone number/i);
		expect(phoneElements[0]).toBeInTheDocument();
	});

	it("renders education and employment section", () => {
		renderUserDetails();
		expect(screen.getByText(/education and employment/i)).toBeInTheDocument();
	});

	it("renders socials section", () => {
		renderUserDetails();
		expect(screen.getByText(/socials/i)).toBeInTheDocument();
	});

	it("renders guarantor section", () => {
		renderUserDetails();
		expect(screen.getByText(/guarantor/i)).toBeInTheDocument();
	});

	it("displays user tier with stars", () => {
		renderUserDetails();
		const stars = screen.getAllByRole("img", { hidden: true });
		expect(stars.length).toBeGreaterThan(0);
	});
});
