$(document).ready(function(){
	 $.getJSON("/data.json", function(datos) {                
                $.each(datos.data, function(idx,primo) {
                    $(".box").append("Niden: " + primo.id);
                });
            });
})