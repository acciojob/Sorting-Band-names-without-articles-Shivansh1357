//your code here

// Array of band names
let bandNames = ['The Beatles', 'Metallica', 'Red Hot Chili Peppers', 'Aerosmith', 'The Rolling Stones'];

// Function to remove articles from band names
function removeArticles(name) {
  // Regular expression to match articles 'a', 'an', 'the' at the beginning of the name
  const regex = /^(a|an|the)\s/i;
  
  // Remove the article from the name and return the modified name
  return name.replace(regex, '');
}

// Sort the band names without articles in lexicographic order
const sortedBandNames = bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element by its id
const bandList = document.getElementById('band');

// Create li elements for each band name and append them to the ul element
sortedBandNames.forEach((bandName) => {
  const li = document.createElement('li');
  li.textContent = bandName;
  bandList.appendChild(li);
});
