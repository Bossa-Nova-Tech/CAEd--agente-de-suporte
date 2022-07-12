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

	for (let buttonDelete of ButtonDelete) {
		console.log(buttonDelete)
		const buttonChildren = buttonDelete.children;
	

		for (let item of buttonChildren) {
			for (let childNodes of item.childNodes) {
				if(childNodes.className.toString().includes("delete-conversation-2") || childNodes.className.toString().includes("delete-conversation-1") || childNodes.className.toString().includes("assign-to-agent") ) {
					item.style.display = "none";
				}
				console.log(childNodes.className.toString())
			}
		}

	}

	// if(buttonChildren[2].childNodes[0].className.toString().includes("delete-conversation-2") || buttonChildren[2].childNodes[0].className.toString().includes("delete-conversation-1")) {
	// 	buttonChildren[2]= "none";
	// 	console.log("botao deletado", buttonChildren[2]);
	// }
	// buttonChildren[3].style.display = "none";
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
