import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useClickOutside } from "./useClickOutside";
import { useRef } from "react";

describe("useClickOutside", () => {
	it("calls callback when clicking outside element", () => {
		const callback = vi.fn();
		const element = document.createElement("div");
		document.body.appendChild(element);

		renderHook(() => {
			const ref = useRef<HTMLDivElement>(element);
			useClickOutside(ref, callback);
			return ref;
		});

		// Simulate mousedown outside
		const outsideElement = document.createElement("div");
		document.body.appendChild(outsideElement);

		const mousedownEvent = new MouseEvent("mousedown", {
			bubbles: true,
			cancelable: true,
		});
		outsideElement.dispatchEvent(mousedownEvent);

		expect(callback).toHaveBeenCalledTimes(1);

		document.body.removeChild(outsideElement);
		document.body.removeChild(element);
	});

	it("does not call callback when clicking inside element", () => {
		const callback = vi.fn();
		const { result } = renderHook(() => {
			const ref = useRef<HTMLDivElement>(null);
			useClickOutside(ref, callback);
			return ref;
		});

		// Create and attach element
		const element = document.createElement("div");
		document.body.appendChild(element);

		// Mock ref.current
		Object.defineProperty(result.current, "current", {
			value: element,
			writable: true,
		});

		// Mousedown inside
		const mousedownEvent = new MouseEvent("mousedown", {
			bubbles: true,
			cancelable: true,
		});
		element.dispatchEvent(mousedownEvent);

		expect(callback).not.toHaveBeenCalled();

		document.body.removeChild(element);
	});

	it("works with array of refs", () => {
		const callback = vi.fn();
		const element1 = document.createElement("div");
		const element2 = document.createElement("div");
		document.body.appendChild(element1);
		document.body.appendChild(element2);

		renderHook(() => {
			const ref1 = useRef<HTMLDivElement>(element1);
			const ref2 = useRef<HTMLDivElement>(element2);
			useClickOutside([ref1, ref2], callback);
			return { ref1, ref2 };
		});

		// Simulate mousedown outside
		const outsideElement = document.createElement("div");
		document.body.appendChild(outsideElement);

		const mousedownEvent = new MouseEvent("mousedown", {
			bubbles: true,
			cancelable: true,
		});
		outsideElement.dispatchEvent(mousedownEvent);

		expect(callback).toHaveBeenCalledTimes(1);

		document.body.removeChild(outsideElement);
		document.body.removeChild(element1);
		document.body.removeChild(element2);
	});
});
