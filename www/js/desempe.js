var ruta="";
var labels=[];
var data=[];
////////////////////////////////////Sacar el parametro por get
function getGET(){
    // capturamos la url
    var loc = document.location.href;
    // si existe el interrogante
    if(loc.indexOf('?')>0) {
        // cogemos la parte de la url que hay despues del interrogante
        var getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        var GET = getString.split('&');
        var get = {};
        // recorremos todo el array de valores
        for(var i = 0, l = GET.length; i < l; i++){
            var tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}
window.onload = function(){
    // Cogemos los valores pasados por get
    var valores=getGET();
    if(valores){
        // hacemos un bucle para pasar por cada indice del array de valores
        for(var index in valores){
            ruta=valores[index];
        }
    }else{
        // no se ha recibido ningun parametro por GET
        document.write("<br>No se ha recibido ningún parámetro");
    }
    conectar();
}
/////////////////////////////////////////////////////////////////////////
//Conectar
function conectar() {
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var jsonResponse = xmlhttp.responseText;
      var objeto_json = JSON.parse(jsonResponse);
      for (var i = 0; i < objeto_json.ruta.length; i++) {
            labels[i]=objeto_json.ruta[i].replace(".json", "");
            data[i]=objeto_json.uniformidad[i];
      }
      Hacergrafica();
    }
  }
  xmlhttp.open("GET",ruta);
  xmlhttp.send();
}
//////Graficar
function Hacergrafica(){
  var barChartData = {
		labels : labels,
		datasets : [
			{
				fillColor : "#6b9dfa",
				strokeColor : "#ffffff",
				highlightFill: "#1864f2",
				highlightStroke: "#ffffff",
				data : data
			}
		]
	}
  /*var lineChartData = {
      labels : labels,
          datasets : [
          {
          label: "Primera serie de datos",
          fillColor : "rgba(220,220,220,0.2)",
          strokeColor : "#6b9dfa",
          pointColor : "#1e45d7",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(220,220,220,1)",
          data : data
        }
      ]
    }*/
  var ctx4 = document.getElementById("canvas").getContext("2d");
  window.myPie = new Chart(ctx4).Bar(barChartData, {responsive:true});
  //window.myPie = new Chart(ctx4).Line(lineChartData, {responsive:true});
}
/////
