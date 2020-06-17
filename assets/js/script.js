var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://realty-mole-property-api.p.rapidapi.com/zipCodes/60060",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
		"x-rapidapi-key": "5b3ff73122msh6af3ba0447690c7p1e5784jsn2bc639bd251a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

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