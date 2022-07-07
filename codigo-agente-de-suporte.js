"use strict";
var ButtonDelete = null;
function getButton() {
	console.log("verificando botao");
	ButtonDelete = document.getElementsByClassName("right-other-tabs");

	whileConditionNotMet();
}

function whileConditionNotMet() {
	if (ButtonDelete == undefined || ButtonDelete == null) {
		setTimeout(getButton, 1000);
		return false;
	}
	const buttonChildren = ButtonDelete[0].children;
	
	console.log(buttonChildren);
	if(buttonChildren[2].childNodes[0].className.toString().includes("delete-conversation-2") || buttonChildren[2].childNodes[0].className.toString().includes("delete-conversation-1")) {
		buttonChildren[2].style.display = "none";
		console.log("botao deletado", buttonChildren[2]);
	}
	return true;
}
whileConditionNotMet();

let thisgroudbutton = null;

function getButtonGroup() {
	thisgroudbutton = document.getElementsByClassName("this-group");
	whileConditionNotMetGroupe();
}
function whileConditionNotMetGroupe() {
	if (thisgroudbutton == undefined || thisgroudbutton == null) {
		setTimeout(getButtonGroup, 1000);
		return false;
	}
	const buttonChildrenGroupe = thisgroudbutton[0].children;

	buttonChildrenGroupe[0].style.display = "none";
	buttonChildrenGroupe[1].click();
	whileConditionNotMet();
	getButtonTimout();
	return true;
}
whileConditionNotMetGroupe();

function getButtonTimout() {
	setTimeout(whileConditionNotMet, 5000);
}
