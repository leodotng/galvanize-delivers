
var menuSpot = document.getElementsByClassName('menuSpot');


	var menuList = 'https://galvanize-eats-api.herokuapp.com/menu';

	fetch(menuList).then(response => {
		return response.json().then(menuData => {
//CheeseBurger
			var newH3 = document.createElement('h3');
			newH3.innerHTML = menuData.menu["0"].name;
			var foodItemOne = document.getElementById('CheezeBurger');
			foodItemOne.innerHTML = '';
			foodItemOne.append(newH3);

			//CheeseBurgerPrice
						var newH3 = document.createElement('h3');
						newH3.innerHTML = menuData.menu["0"].price;
						var burgerItemPrice = document.getElementById('CheezeBurgerPrice');
						burgerItemPrice.innerHTML = '';
						burgerItemPrice.append(newH3);



//Hamburger
			var newH3 = document.createElement('h3');
			newH3.innerHTML = menuData.menu[2].name;
			var foodItemTwo = document.getElementById('HamHamBurger');
			foodItemTwo.innerHTML = '';
			foodItemTwo.append(newH3);


						//HamHamBurgerPrice
									var newH3 = document.createElement('h3');
									newH3.innerHTML = menuData.menu["1"].price;
									var burgerItemPrice2 = document.getElementById('HamHamBurgerPrice');
									burgerItemPrice2.innerHTML = '';
									burgerItemPrice2.append(newH3);


//CheesePizza
			var newH3 = document.createElement('h3');
			newH3.innerHTML = menuData.menu[1].name;
			var cheezeP = document.getElementById('CheezePizza');
			cheezeP.innerHTML = '';
			cheezeP.append(newH3);
//END CheesePizza

						//CheesePizzaPrice
									var newH3 = document.createElement('h3');
									newH3.innerHTML = menuData.menu[1].price;
									var cheezePprice = document.getElementById('CheezePizzaPrice');
									cheezePprice.innerHTML = '';
									cheezePprice.append(newH3);
						//END CheesePizzaPrice



//Pepperoni Pizza
						var newH3 = document.createElement('h3');
						newH3.innerHTML = menuData.menu[3].name;
						var peppP = document.getElementById('PeppPizza');
						peppP.innerHTML = '';
						peppP.append(newH3);
//END Pepperoni Pizza

						//PeppPizzaPrice
									var newH3 = document.createElement('h3');
									newH3.innerHTML = menuData.menu[3].price;
									var peppPprice = document.getElementById('PeppPizzaPrice');
									peppPprice.innerHTML = '';
									peppPprice.append(newH3);
						//END PeppPizzaPrice

//Sausage Pizza
				var newH3 = document.createElement('h3');
				newH3.innerHTML = menuData.menu[4].name;
				var sausP = document.getElementById('SausPizza');
				sausP.innerHTML = '';
				sausP.append(newH3);

					//SausPizzaPrice
							var newH3 = document.createElement('h3');
							newH3.innerHTML = menuData.menu[4].price;
							var sausPprice = document.getElementById('SausPizzaPrice');
							sausPprice.innerHTML = '';
							sausPprice.append(newH3);
					//END SausPizzaPrice






})
})
