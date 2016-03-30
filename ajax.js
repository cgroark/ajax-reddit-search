// Set up the page when it loads.
$(function() {
  // attach the form submission to the search function
  $("#search-form").on('submit', search);
});

function search(event) {
  // Stop the form from changing the page.
  event.preventDefault();

  // Get the users search input and save it in a variable.
  // Use the input placeholder value (like "kittens") as a default value.
  var userQuery = undefined;

  console.log("searching for:", userQuery);

  $.get('https://www.reddit.com/search.json', {
    q: 'kittens'
  }).done(function(response) {
    console.log(response);
    
    // You must choose how to process the data that returns from the AJAX request
    // and figure out how to display it on the page from here on out.
  });
}

// Clear previous search results.
function clearSearchResults() {
  $("#results").html("");
}

// Adds a single result object to the page.
function addSearchResult(result) {
  // Create a list item to contain the search result link
  var li = document.createElement("li");

  // create an anchor tag
  var link = document.createElement("a");
  link.href = "#"; // reset the value of the the href
  link.textContent = ""; // set the value of the text in the link

  // put the link inside the list item.
  $(li).append(link);

  // add the list item to the list of search results
  $("#results").append(li);
}
