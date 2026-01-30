import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Users from "../pages/Users";
import userEvent from "@testing-library/user-event";

// Mock fetch
(global as any).fetch = vi.fn();

const mockUsers = [
	{
		id: "1",
		organization: "Lendsqr",
		username: "John Doe",
		email: "john@lendsqr.com",
		phoneNumber: "08012345678",
		dateJoined: "Jan 15, 2024 10:00 AM",
		status: "active",
	},
	{
		id: "2",
		organization: "Irorun",
		username: "Jane Smith",
		email: "jane@irorun.com",
		phoneNumber: "08087654321",
		dateJoined: "Jan 20, 2024 2:30 PM",
		status: "inactive",
	},
];

describe("Users", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		((global as any).fetch as any).mockResolvedValue({
			json: async () => mockUsers,
		});
	});

	const renderUsers = () => {
		return render(
			<BrowserRouter>
				<Users />
			</BrowserRouter>,
		);
	};

	it("renders loading state initially", async () => {
		renderUsers();
		expect(screen.getByText(/loading users/i)).toBeInTheDocument();

		// Wait for the loading to complete to avoid act warnings
		await waitFor(() => {
			expect(screen.queryByText(/loading users/i)).not.toBeInTheDocument();
		});
	});

	it("renders users table after loading", async () => {
		renderUsers();

		await waitFor(() => {
			expect(screen.getByText("John Doe")).toBeInTheDocument();
			expect(screen.getByText("Jane Smith")).toBeInTheDocument();
		});
	});

	it("displays correct user count in stats", async () => {
		renderUsers();

		await waitFor(() => {
			expect(screen.getByText("USERS")).toBeInTheDocument();
		});

		expect(screen.getByText("ACTIVE USERS")).toBeInTheDocument();
		expect(screen.getByText("USERS WITH LOANS")).toBeInTheDocument();
	});

	it("displays active users count", async () => {
		renderUsers();

		await waitFor(() => {
			const activeCount = screen.getAllByText("1");
			expect(activeCount.length).toBeGreaterThan(0);
		});
	});

	it("renders pagination controls", async () => {
		renderUsers();

		await waitFor(() => {
			expect(screen.getByText(/showing/i)).toBeInTheDocument();
			expect(screen.getByText(/out of/i)).toBeInTheDocument();
		});
	});

	it("opens filter popup when filter button is clicked", async () => {
		const user = userEvent.setup();
		renderUsers();

		await waitFor(() => {
			expect(screen.getByText("John Doe")).toBeInTheDocument();
		});

		const filterButton = screen.getByRole("button", { name: /filter/i });
		await user.click(filterButton);

		expect(screen.getByPlaceholderText(/user/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
	});

	it("changes items per page when dropdown is changed", async () => {
		const user = userEvent.setup();
		renderUsers();

		await waitFor(() => {
			expect(screen.getByText("John Doe")).toBeInTheDocument();
		});

		const perPageSelect = screen.getByDisplayValue("10");
		await user.selectOptions(perPageSelect, "25");

		expect(perPageSelect).toHaveValue("25");
	});

	it("fetches users from API on mount", async () => {
		renderUsers();

		await waitFor(() => {
			expect((global as any).fetch).toHaveBeenCalledWith(
				"https://api.json-generator.com/templates/QQIGNxaJTRMv/data",
				expect.objectContaining({
					headers: expect.objectContaining({
						Authorization: expect.stringContaining("Bearer"),
					}),
				}),
			);
		});
	});
});
