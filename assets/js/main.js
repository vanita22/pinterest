$(document).ready(function(){ 

	/*HACE EL RECORRIDO DE CADA ELEMENTO DENTRO DEL OBJETO Y SE AGREGA EN SUS RESPECTIVAS CAJAS*/
	for(i=0; i<=3; i++){
		$(".box").append("<img src=dist/img/"+ dat[i].image_url + ">" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "<br>");
	}

	for(i=4; i<=7; i++){
		$(".box2").append("<img src=dist/img/"+ dat[i].image_url + ">" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "<br>");
	}

	for(i=8; i<=11; i++){
		$(".box3").append("<img src=dist/img/"+ dat[i].image_url + ">" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "<br>");
	}

	for(i=12; i<=15; i++){
		$(".box4").append("<img src=dist/img/"+ dat[i].image_url + ">" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "<br>");
	}

	for(i=16; i<=19; i++){
		$(".box5").append("<img src=dist/img/"+ dat[i].image_url + ">" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "<br>");
	}

	/*MUESTRA Y OCULTA EL SUB-MENU*/

	$(".lista").hide();
	
	$(".hambur").click(function(){
		$(".lista").show(300);
	})

	$(".close").click(function(){
		$(".lista").hide(300);
	})
})


