(function(){
	var casas = [];
	for(var i = 1; i < 16; i++){
		var casa = document.querySelector("#n"+i);
		casa.addEventListener("click", moveCasa,false);
		casas.push(casa);
	}
	casas.push(null);
	render();

	function render(){
		for(var i in casas){
			var casa = casas[i];
			if(casa){
				casa.style.left = (i%4) * 50 + 5 + "px";
				if(i<4){
					casa.style.top = "5px";
				}else{
					if(i<8){
						casa.style.top = "55px";
					}else if(i<12){
						casa.style.top = "155px";
					}else{
						casa.style.top = "205px"
					}
				}
			}
		}
	}

	function moveCasa(){
		var index = casas.indexOf(this);
		//move esquerda
		if(index % 4 !== 0){
			if(!casas[index-1]){
				casas[index-1] = this;
				casas[index] = null;
			}
		}
		//move direita
		if(index % 4 !== 2){
			if(!casas[index+1]){
				casas[index+1] = this;
				casas[index] = null;
			}
		}
		//move cima
		if(index > 3){
			if(!casas[index-3]){
				casas[index-3] = this;
				casas[index] = null;
			}
		}
		//move baixo
		if(index < 12){
			if(!casas[index+3]){
				casas[index+3] = this;
				casas[index] = null;
			}
		}
		render();
	}

}());