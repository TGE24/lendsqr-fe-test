import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ReactElement } from "react";
import { vi } from "vitest";

export const renderWithRouter = (ui: ReactElement, options?: RenderOptions) => {
	return render(<BrowserRouter>{ui}</BrowserRouter>, options);
};

export const mockFetch = (data: any) => {
	return vi.fn().mockResolvedValue({
		json: async () => data,
		ok: true,
	});
};

export const mockFetchError = (error: string) => {
	return vi.fn().mockRejectedValue(new Error(error));
};
