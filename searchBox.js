const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    openBraveSearch(searchInput.value);
  }
});

function openBraveSearch(query) {
  const braveSearchUrl = `https://search.brave.com/search?q=${query}`;
  window.location.href = braveSearchUrl;
}
