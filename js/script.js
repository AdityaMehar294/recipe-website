function recipeSearch() {
    // Get the input value
    let searchInput = document.getElementById('find').value.toLowerCase();
    //console.log(searchInput)
    if(searchInput===''){
        document.querySelector("#cake").style.display="";
        document.querySelector("#soup").style.display="";
        document.querySelector("#breakfast").style.display="";
        var recipeCards = document.getElementsByClassName('recipe');
        // Loop through each recipe card
        for (var i = 0; i < recipeCards.length; i++) {
        // Get the title of the current recipe card
        recipeCards[i].style.display=""
        }
    }
    else{
        document.querySelector("#cake").style.display="none";
        document.querySelector("#soup").style.display="none";
        document.querySelector("#breakfast").style.display="none";

    // Get all recipe cards
    var recipeCards = document.getElementsByClassName('recipe');
  
    // Loop through each recipe card
    for (var i = 0; i < recipeCards.length; i++) {
      // Get the title of the current recipe card
      var title = recipeCards[i].getElementsByClassName('card-title')[0].innerText.toLowerCase();
  
      // Check if the search input matches the title
      if (title.includes(searchInput)) {
        // Display the recipe card
        recipeCards[i].style.display = 'block';
      } else {
        // Hide the recipe card
        recipeCards[i].style.display = 'none';
      }
    }
}
  }