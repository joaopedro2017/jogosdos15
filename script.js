(function(){
	var casas = [];
	for(var i = 1; i < 16; i++){
		var casa = document.querySelector("#n"+i);
		casa.addEventListener("click", moveTile,false);
		casas.push(casa);
	}
	casas.push(null);
	render();
})