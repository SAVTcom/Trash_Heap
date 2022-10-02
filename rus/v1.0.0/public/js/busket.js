function eat() {
	file.file_boolean=false;
	if (model.busket_eat<model.busket_full_eat) {
		model.busket_eat++;
			for (var i =0; i < view.table.length; i++) {
		view.table[i].setAttribute("class","");
	}
	}else{
		alert("очистите корзину");
	}
	model.init();
}



var view={
	busket:document.getElementById('00'),
	table:[document.getElementById("03"),document.getElementById("05"),document.getElementById("10"),document.getElementById("14")],
	busket_img:document.getElementById("busket"),
	hungry:function(){
		view.busket_img.src="images/trash_heap_not_trash.png";
	},
	full:function() {
		view.busket_img.src="images/trash_heap_is_trash.png";
	}
};

var model={
	busket_full_eat:10,
	busket_eat:0,
	moral:50,
	active:[true,true],

	init:function() {
		if (model.busket_eat>0) {
			view.full();
		}else{
			view.hungry();
		}
	},

	choise:function(){
		if (model.busket_eat>0){
			if (confirm("Вы хотите очистить ведро?")){
				model.moral+=model.busket_eat;
				model.busket_eat=0;
				model.init();
				return null;
			}
		}

		if (model.moral<100 && model.active[0]){
			if (confirm("Вы хотите похвалить ведро?")) {
				model.moral++;
				model.active[0]=false;
				alert("Текущее состояние ведра: "+model.moral+" из 100");
				setTimeout(model.activ,10000,0);
				return null;
			}
		}

		if (model.moral>35 && model.active[1]) {
			if (confirm("Вы хотите дразнить ведро?")) {
				model.moral--;
				model.active[1]=false;
				alert("Текущее состояние ведра: "+model.moral+" из 100");
				setTimeout(model.activ,10000,1);
				return null;
			}
		}else{
			if (!model.active[1]) {
				alert("You lose!");
				model.lose();
			}
		}
		if (model.moral>=100){
			while (true==true){
				Alert("You WIN!");
			}
		}
	},

	activ:function(inte){
		model.active[inte]=true;
	},

	lose:function(){
		setTimeout(model.lose,1000);
		alert("You lose!");
	}
};

var file={
	file_boolean:false,
	new_file:function() {
		if (this.file_boolean) {
			return null;
		}else{
			var i=Math.floor(Math.random()*view.table.length);
			this.file_boolean=true;
			view.table[i].setAttribute("class","file");
			view.table[i].onclick=eat;
		}
	}
};

view.busket_img.onclick=model.choise;

function file_(){
	setTimeout(file_,10000);
	file.new_file();
}
setTimeout(file_,10000);