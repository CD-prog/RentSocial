/**
 * Step 1: Use "https://realty-mole-property-api.p.rapidapi.com/rentalListings?city=Austin&state=TX" to get the Rental Property Listing in the given city.
 * Step 2: Display the properties on the html as formatted address.
 * Step 3: Provide 2 buttons one for "Show Property Details" and other "Local Events"
 * Step 4: On click "Show Property Details" call https://realty-mole-property-api.p.rapidapi.com/properties?address= with the property address from the display.
 * Step 5: On click "Local Events", call yelp api to get events using the city from the formatted address.
 */
 $(document).ready(function(){
	$('select').formSelect();
 });
 
	
$("#searchBtn").on("click",function(){
	var city = $("#input").val();
	console.log(city);
	var selectedState = $('#state :selected').val();
	console.log("Selected State on Search" + selectedState);

	//Ajax call to get rental listing
	var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://realty-mole-property-api.p.rapidapi.com/rentalListings?city=" + city + "&state="+ selectedState +"&limit=10",
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
				"x-rapidapi-key": "5b3ff73122msh6af3ba0447690c7p1e5784jsn2bc639bd251a"
			}
		};
	
		$.ajax(settings).done(function (response) {
			console.log(response);
			$(".card-title").text(response.formattedAddress);
			
		});

});
	
//Ajax call for events
	var settings = {

		"url": "http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?limit=25&location=60060",
		"method": "GET",
		"timeout": 0,
		// dataType: "jsonp",
		"headers": {
		  "Authorization": "Bearer ziQsHIfnSa_NACbvMbDhqwbokq9PHvJ8vhH3TqgnSKqriuR-X8NwwjZ2zcdke6bCgJ-wW4NtRRKuAk0IdZzWg71fPHApVP841FW-X3sLYft0wMD9AK9ioGrJQRnsXnYx"
		  
		},
	  };
	  $.ajax(settings).done(function (response) {
		console.log(response);
	  }).catch(function(error){
		  console.log(error.responseText)
	  });


 
