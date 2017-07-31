$(document).ready(function(){ 

	/*HACE EL RECORRIDO DE CADA ELEMENTO DENTRO DEL OBJETO Y SE AGREGA EN SUS RESPECTIVAS CAJAS*/
	for(i=0; i<=3; i++){
		$(".box").append("<div class='dat[i].id'>" + "<img src=dist/img/"+ dat[i].image_url + " class='open'>" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "</div>" +"<br>");
	}

	for(i=4; i<=7; i++){
		$(".box2").append("<div class='dat[i].id'>" + "<img src=dist/img/"+ dat[i].image_url + " class='open'>" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "</div>" +"<br>");
	}

	for(i=8; i<=11; i++){
		$(".box3").append("<div class='dat[i].id'>" + "<img src=dist/img/"+ dat[i].image_url + " class='open'>" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "</div>" +"<br>");
	}

	for(i=12; i<=15; i++){
		$(".box4").append("<div class='dat[i].id'>" + "<img src=dist/img/"+ dat[i].image_url + " class='open'>" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "</div>" +"<br>");
	}

	for(i=16; i<=19; i++){
		$(".box5").append("<div class='dat[i].id'>" + "<img src=dist/img/"+ dat[i].image_url + " class='open'>" + "<h4>" + dat[i].title + "</h4>" + "<h5>" + dat[i].description + "</h5>" + "<div><h3>M</h3><p>"+dat[i].user+"</p><h2>#"+dat[i].hashtag+"</h2></div>" + "</div>" +"<br>");
	}

	/*MUESTRA Y OCULTA EL SUB-MENU*/

	$(".lista").hide();
	
	$(".hambur").click(function(){
		$(".lista").show();
	})

	$(".close").click(function(){
		$(".lista").hide();
	})       
        

    /*FUNCIONAMIENTO DEL MODAL*/

    $(".modal").hide(); 

    $(".btn-close").click(function(){
		$(".modal").hide(300);
		$("#modal-a").value(" ");
	})

	$(".open").click(function(){
		$(".modal").show(300);
		$("#modal-b").append("<div class='dat[i].id'>" + "<h4>" + dat[i].title + "</h4>" + "<img src=dist/img/"+ dat[i].image_url + ">" + "</div>");
		$("#modal-c").append("<div class='dat[i].id'>" + "<div><h3>M</h3><p>" + dat[i].user+"</p><h2>#"+dat[i].hashtag + "</h2></div>" + "<h5>" + dat[i].description + "</h5>" + "</div>");
	})

	/*$("#buscar").click(function(){
		$(".resultado").append("#busqueda");
	})*/ no funcionó...
})


