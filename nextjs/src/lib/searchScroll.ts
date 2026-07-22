/**
 * Triggers focus on the search input bar.
 * Accepts an optional Next.js router.push function to navigate home first.
 * Falls back to window.history for non-Next environments.
 */
export const handleSearchFocus = (routerPush?: (path: string, options?: any) => void) => {
  const focusSearchInput = (attempt = 0) => {
    const searchInput = document.getElementById(
      "menu-search-input",
    ) as HTMLInputElement | null;

    if (!searchInput) {
      if (attempt < 8) {
        window.setTimeout(() => focusSearchInput(attempt + 1), 120);
      }
      return;
    }

    const shouldGoHome = window.location.pathname !== "/";

    if (shouldGoHome) {
      if (routerPush) {
        // Use Next.js router to navigate without full reload
        routerPush("/", { scroll: false });
      } else {
        window.history.pushState({}, "", "/");
        window.dispatchEvent(new PopStateEvent("popstate"));
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      searchInput.focus({ preventScroll: true });
      searchInput.setSelectionRange(
        searchInput.value.length,
        searchInput.value.length,
      );
      searchInput.click();
    }, 220);

    window.setTimeout(() => {
      searchInput.focus({ preventScroll: true });
      searchInput.setSelectionRange(
        searchInput.value.length,
        searchInput.value.length,
      );
    }, 650);
  };

  window.requestAnimationFrame(() => focusSearchInput());
};
