// Différents éléments du DOM
var buttons = $('.story').find('button');
var options = $('.story').find('p.option');
var lifeBar = $('.life').find('.bar');
var fuelBar = $('.fuel').find('.bar');
var oxygenBar = $('.oxygen').find('.bar');

// Valeurs max
var maxLife = 100;
var maxFuel = 100;
var maxOxygen = 100;

var endGame = false;

// Lancer le jeu au chargement de la page
$(document).ready(function() {
	initializeGame();
	startGame();
})

// Evènement de click sur les boutons
buttons.on('click', function() {

	var step = $(this).attr('go');

	if (step == 'restart') {
		initializeGame()
		startGame()
	} else {
		updateValues(step, function() {
			changeSection(step);
		})
	}

})

// Réinitialiser le jeu
function initializeGame() {
	setLife(maxLife);
	setFuel(maxFuel);
	setOxygen(maxOxygen);
	buttons.attr('go', '');
	options.find('span').html('');
	endGame = false;
}

// Débuter l'histoire
function startGame() {
	changeSection('start');
}

// Faire apparaître le texte lettre après lettre
function writeText(step, index) {  
	// Vider la texte actuel et désactiver le bouton
	if (index == 0) {
		$(".text-box p.text").html("");
		buttons.attr('disabled', true);
		options.css('display', 'none');
	};
	// Réactiver le bouton
	if (index == story[step].text.length) {
		showButtons(step);
  		buttons.attr('disabled', false);
  	};
  	// Placer la lettre suivante, puis rappeler la fonction avec un index incrémenté
  	if (index <= story[step].text.length) { 
        $(".text-box p.text").html(story[step].text.substr(0, index++)); 
        setTimeout(function () { writeText(step, index); }, 1);
    }
}

// Afficher les bons boutons en fonction de l'étape
function showButtons(step) {
	buttons.css('display', 'none');
	$.each(story[step].buttons, function(i, item) {
		buttons.filter('.'+item).css('display', 'inline-block').attr('go', story[step].choices[item][0]);
		options.filter('.'+item).fadeIn().find('span').html(story[step].choices[item][1])
	})
	if (story[step].buttons.length == 2) {
		buttons.filter('.option-2').css('margin-right', '0');
	} else {
		buttons.filter('.option-2').css('margin-right', '');
	}
}

// Aller à une étape
function changeSection(step) {
	camera.setTarget(story[step].target);
	writeText(step, 0);
	//showButtons(step);
}

function updateValues(step, callback) {
	// Mettre à jour la vie
	var newLife = parseInt(getLife())+parseInt(story[step].actions.life)
	if (newLife <= 0) { 
		dead()
	} else {
		if (newLife > 100) {
			newLife = 100;
		};
		setLife(newLife);
	}
	
	// Mettre à jour le carburant
	var newFuel = parseInt(getFuel())+parseInt(story[step].actions.fuel)
	if (newFuel <= 0) { 
		outOfFuel()
	} else {
		if (newFuel > 100) {
			newFuel = 100;
		};
		setFuel(newFuel);
	}

	// Mettre à jour l'oxygène
	var newOxygen = parseInt(getOxygen())+parseInt(story[step].actions.oxygen)
	if (newOxygen <= 0) { 
		outOfOxygen()
	} else {
		if (newOxygen > 100) {
			newOxygen = 100;
		};
		setOxygen(newOxygen);
	}

	// Vérifier si le joueur est mort ou s'il n'a plus de carburant ou d'oxygène
	if (!endGame) {
		callback();
	}
}

// L'utilisateur n'a plus de vie
function dead() {
	endGame = true
	setLife(0)
	changeSection('dead')
}

// L'utilisateur n'a plus de carburant
function outOfFuel() {
	endGame = true
	setFuel(0)
	changeSection('outOfFuel')
}

// L'utilisateur n'a plus d'oxyègen
function outOfOxygen() {
	endGame = true
	setOxygen(0)
	changeSection('outOfOxygen')
}

// Mettre la vie à une certaine valeur
function setLife(value) {
	lifeBar.find('.level').attr('data', value);
	updateLifeBar();
}

// Avoir la valeur de vie
function getLife() {
	return lifeBar.find('.level').attr('data');
}

// Mettre à jour la barre de vie
function updateLifeBar() {
	life = getLife();
	currentWidth = lifeBar.width()
	newWidth = (currentWidth*life)/maxLife;

	lifeBar.find('.level').width(newWidth);
}

// Mettre le carburant à une certaine valeur
function setFuel(value) {
	fuelBar.find('.level').attr('data', value);
	updateFuelBar();
}

// Avoir la valeur du carburant
function getFuel() {
	return fuelBar.find('.level').attr('data');
}

// Mettre à jour la barre du carburant
function updateFuelBar() {
	fuel = getFuel();
	currentHeight = fuelBar.height()
	newHeight = (currentHeight*fuel)/maxFuel;

	fuelBar.find('.level').height(newHeight);
}

// Mettre l'oxygène à une certaine valeur
function setOxygen(value) {
	oxygenBar.find('.level').attr('data', value);
	updateOxygenBar();
}

// Avoir la valeur d'oxygène
function getOxygen() {
	return oxygenBar.find('.level').attr('data');
}

// Mettre à jour la barre d'oxygène
function updateOxygenBar() {
	oxygen = getOxygen();
	currentHeight = oxygenBar.height()
	newHeight = (currentHeight*oxygen)/maxOxygen;

	oxygenBar.find('.level').height(newHeight);
}