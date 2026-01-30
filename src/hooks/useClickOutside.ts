import { useEffect, RefObject } from "react";

/**
 * Custom hook that triggers a callback when clicking outside of the specified element(s)
 * @param refs - Single ref or array of refs to monitor
 * @param callback - Function to call when clicking outside
 */
export const useClickOutside = (
	refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
	callback: () => void,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const refsArray = Array.isArray(refs) ? refs : [refs];

			const isOutside = refsArray.every(
				(ref) => ref.current && !ref.current.contains(event.target as Node),
			);

			if (isOutside) {
				callback();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [refs, callback]);
};
