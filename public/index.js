'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];



function exo1()
{
	for (var i =0; i <3; i++)
	{
		//EXERCICE 1
		var time = (new Date(rentals[i].returnDate).getDate() - new Date(rentals[i].pickupDate).getDate() + 1);
		var timeprice = time * cars[i].pricePerDay;
		
			//EXERCICE 2
			if(time > 10)
				timeprice = timeprice - timeprice/2;
			else if(time > 4)
				timeprice = timeprice - (timeprice/10)*3;
			else if(time > 1)
				timeprice = timeprice - timeprice/10;
			//END EXERCICE 2
		
		var distanceprice = rentals[i].distance * cars[i].pricePerKm;
		var total = timeprice + distanceprice;
		rentals[i].price = total;
		//END EXERCICE 1

		//EXERCICE 3
		var commission = rentals[i].price*0.3;
		rentals[i].commission.insurance = commission/2;
		rentals[i].commission.assistance = time;
		rentals[i].commission.drivy = commission - commission/2 - time;
		//END EXERICE 3

		//EXERCICE 4
		if(rentals[i].options.deductibleReduction == true)
		{
			rentals[i].price = rentals[i].price + (time*4);
			rentals[i].commission.drivy += time*4;
		}
		//END EXERICE 4

	}
}

function exo2()
{
	for (var i =0; i <3; i++)
	{
		
			actors[i].payment[0].amount = rentals[i].price;
			actors[i].payment[1].amount = rentals[i].price - rentals[i].price*0.3;
			actors[i].payment[2].amount = rentals[i].commission.insurance;
			actors[i].payment[3].amount = rentals[i].commission.assistance;
			actors[i].payment[4].amount = rentals[i].commission.drivy + rentals[i].price*0.3 ;
	}

}

exo1();
exo2();


console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
