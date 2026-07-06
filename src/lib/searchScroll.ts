export const handleSearchFocus = () => {
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
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
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
