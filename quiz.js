function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var carData = inventory.cars;
  var contentToDOM = "";
  var displayEmt = document.getElementById("displayEmt");

  for (var i = 0; i < carData.length; i++){
  	if (i % 3 === 0){
		  contentToDOM += '<div class="row">';
	  }
			  	contentToDOM += '<div class="col-md-4">';
				  	contentToDOM += '<card class="card col-md-10 col-md-offset-1">';
					  	contentToDOM += '<h3>' + carData[i].make + '</h3>';
					  	contentToDOM += '<h4>' + carData[i].model + '</h4>';
					  	contentToDOM += '<h5>' + carData[i].year + '</h5>';
					  	contentToDOM += '<div class="price">$' + carData[i].price + '</div>';
					  	contentToDOM += '<div>' + carData[i].description + '</div>';
				  	contentToDOM += '</card>';
			  	contentToDOM += '</div>';
  	if ((i - 2) % 3 === 0){
		  contentToDOM += '</div>';
	  }
  }
  displayEmt.innerHTML = contentToDOM;

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
} // end populatePage

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();

