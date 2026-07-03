export const handleSearchFocus = () => {
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Wait for scrolling to finish before focusing
      setTimeout(() => {
        searchInput.focus();
      }, 400);
    }
  };