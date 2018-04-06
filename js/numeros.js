
// var links = document.querySelectorAll(".btn_numero");

// for(var i = 0; i < links.length; i++) {

// 	links[i].addEventListener('click', function() {
// 		this.classList.toggle('btn_numero_active');
// 	});

// }

// var numeros = document.querySelector('.numeros');

// numeros.addEventListener('click', function(e) {
// 	if(e.target.classList.contains('btn_numero')) {
// 		e.target.classList.toggle('btn_numero_active');
// 	}
// });

var $numerosContainer = $(".numeros");

$numerosContainer.on("click", ".btn_numero", function(){
	$(this).toggleClass("btn_numero_active");
});
