// Create a variable to store the search input element
var searchInput = document.getElementById("search-bar");

// Create a variable to store all the text elements
var textElements = document.querySelectorAll(".text-element");

// Add an event listener to the search input element that will run a function when the user types
searchInput.addEventListener("input", function() {
  
  // Get the value of the search input and convert it to uppercase
  var filter = searchInput.value.toUpperCase();

  // Loop through all the text elements
  for (var i = 0; i < textElements.length; i++) {

    // Get the data-keywords attribute of each element and convert it to uppercase
    var keywords = textElements[i].getAttribute("data-tags").toUpperCase();

    // Check if the filter value is contained in the keywords
    if (keywords.indexOf(filter) > -1) {

      // If yes, display the element
      textElements[i].style.display = "";
    } else {

      // If no, hide the element
      textElements[i].style.display = "none";
    }
  }
});
