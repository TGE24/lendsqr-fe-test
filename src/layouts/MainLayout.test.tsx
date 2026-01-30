import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import MainLayout from "../layouts/MainLayout";

// Mock useLocation
vi.mock("react-router-dom", async () => {
	const actual = await vi.importActual("react-router-dom");
	return {
		...actual,
		useLocation: () => ({ pathname: "/users" }),
	};
});

describe("MainLayout", () => {
	const renderMainLayout = () => {
		return render(
			<BrowserRouter>
				<MainLayout />
			</BrowserRouter>,
		);
	};

	it("renders header with logo", () => {
		renderMainLayout();
		expect(screen.getByAltText(/company logo/i)).toBeInTheDocument();
	});

	it("renders search bar", () => {
		renderMainLayout();
		expect(
			screen.getByPlaceholderText(/search for anything/i),
		).toBeInTheDocument();
	});

	it("renders notification bell", () => {
		renderMainLayout();
		const bells = screen.getAllByRole("button");
		expect(bells.length).toBeGreaterThan(0);
	});

	it("renders user profile section", () => {
		renderMainLayout();
		expect(screen.getByText("Adedeji")).toBeInTheDocument();
	});

	it("renders sidebar navigation", () => {
		renderMainLayout();
		const switchOrgElements = screen.getAllByText(/switch organization/i);
		expect(switchOrgElements[0]).toBeInTheDocument();
		const dashboardElements = screen.getAllByText(/dashboard/i);
		expect(dashboardElements[0]).toBeInTheDocument();
	});

	it("renders customers section in sidebar", () => {
		renderMainLayout();
		const usersElements = screen.getAllByText("Users");
		expect(usersElements[0]).toBeInTheDocument();
		const guarantorsElements = screen.getAllByText("Guarantors");
		expect(guarantorsElements[0]).toBeInTheDocument();
		const loansElements = screen.getAllByText("Loans");
		expect(loansElements[0]).toBeInTheDocument();
	});

	it("renders businesses section in sidebar", () => {
		renderMainLayout();
		const orgElements = screen.getAllByText("Organization");
		expect(orgElements[0]).toBeInTheDocument();
		const transactionsElements = screen.getAllByText("Transactions");
		expect(transactionsElements[0]).toBeInTheDocument();
	});

	it("renders settings section in sidebar", () => {
		renderMainLayout();
		const preferencesElements = screen.getAllByText("Preferences");
		expect(preferencesElements[0]).toBeInTheDocument();
		const auditLogsElements = screen.getAllByText("Audit Logs");
		expect(auditLogsElements[0]).toBeInTheDocument();
	});

	it("highlights active navigation item", () => {
		renderMainLayout();
		const usersLinks = screen.getAllByRole("link", { name: /users/i });
		expect(usersLinks[0]).toHaveClass("active");
	});
});
