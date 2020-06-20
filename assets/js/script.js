var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://realty-mole-property-api.p.rapidapi.com/rentalListings?city=Austin&state=TX&limit=10",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
		"x-rapidapi-key": "5b3ff73122msh6af3ba0447690c7p1e5784jsn2bc639bd251a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

$("#searchBtn").on("click",function(){

	var zip = $("#input").val();
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://realty-mole-property-api.p.rapidapi.com/zipCodes/"+zip,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
			"x-rapidapi-key": "5b3ff73122msh6af3ba0447690c7p1e5784jsn2bc639bd251a"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
	console.log(zip)
})



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