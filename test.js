document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const itemList = document.getElementById('itemList');
  const listItems = itemList.getElementsByTagName('li');

  searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toUpperCase();

    for (let i = 0; i < listItems.length; i++) {
      const item = listItems[i];
      const textValue = item.textContent || item.innerText; // Get the text content of the list item

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = ''; // Show the item if it matches the filter
      } else {
        item.style.display = 'none'; // Hide the item if it doesn't match
      }
    }
  });
});