var labels=[];
var s="";
var data=[];
var color=[];
var colores=[];
var porcentaje=[];
var ruta="";
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


function conectar() {
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      var jsonResponse = xmlhttp.responseText;
      var objeto_json = JSON.parse(jsonResponse);
      //paisesRecibidos = objeto_json.imagen;
      //alert(objeto_json.uniformidad);
  /*  var uni=parseInt(objeto_json.uniformidad);
      data[0]=uni;
      data[1]=(20);
      data[2]=30;
      labels[0]="Piloncillo1";
      labels[1]="Piloncillo2";
      labels[2]="Piloncillo3";
       colores[1] = "#bbd213";*/
    //  alert(objeto_json.colores[0].porcentaje+" "+objeto_json.colores[0].hexadecimal);
    //alert();
    //alert(objeto_json.Tabla.c9.color.a);
    labels[0]= objeto_json.Tabla.c0.hex;
    data[0]=objeto_json.Tabla.c0.uniformidad;
    labels[1]= objeto_json.Tabla.c1.hex;
    data[1]=objeto_json.Tabla.c1.uniformidad;
    labels[2]= objeto_json.Tabla.c2.hex;
    data[2]=objeto_json.Tabla.c2.uniformidad;
    labels[3]= objeto_json.Tabla.c3.hex;
    data[3]=objeto_json.Tabla.c3.uniformidad;
    labels[4]= objeto_json.Tabla.c4.hex;
    data[4]=objeto_json.Tabla.c4.uniformidad;
    labels[5]= objeto_json.Tabla.c5.hex;
    data[5]=objeto_json.Tabla.c5.uniformidad;
    labels[6]= objeto_json.Tabla.c6.hex;
    data[6]=objeto_json.Tabla.c6.uniformidad;
    labels[7]= objeto_json.Tabla.c7.hex;
    data[7]=objeto_json.Tabla.c7.uniformidad;
    labels[8]= objeto_json.Tabla.c8.hex;
    data[8]=objeto_json.Tabla.c8.uniformidad;
    labels[9]= objeto_json.Tabla.c9.hex;
    data[9]=objeto_json.Tabla.c9.uniformidad;
    labels[10]= objeto_json.Tabla.c10.hex;
    data[10]=objeto_json.Tabla.c10.uniformidad;
    labels[11]= objeto_json.Tabla.c11.hex;
    data[11]=objeto_json.Tabla.c11.uniformidad;
    labels[12]= objeto_json.Tabla.c12.hex;
    data[12]=objeto_json.Tabla.c12.uniformidad;
    labels[13]= objeto_json.Tabla.c13.hex;
    data[13]=objeto_json.Tabla.c13.uniformidad;
    labels[14]= objeto_json.Tabla.c14.hex;
    data[14]=objeto_json.Tabla.c14.uniformidad;
    labels[15]= objeto_json.Tabla.c15.hex;
    data[15]=objeto_json.Tabla.c15.uniformidad;
    labels[16]= objeto_json.Tabla.c16.hex;
    data[16]=objeto_json.Tabla.c16.uniformidad;
    labels[17]= objeto_json.Tabla.c17.hex;
    data[17]=objeto_json.Tabla.c17.uniformidad;
    labels[18]= objeto_json.Tabla.c18.hex;
    data[18]=objeto_json.Tabla.c18.uniformidad;
    labels[19]= objeto_json.Tabla.c19.hex;
    data[19]=objeto_json.Tabla.c19.uniformidad;
    labels[20]= objeto_json.Tabla.c20.hex;
    data[20]=objeto_json.Tabla.c20.uniformidad;
    labels[21]= objeto_json.Tabla.c21.hex;
    data[21]=objeto_json.Tabla.c21.uniformidad;
    labels[22]= objeto_json.Tabla.c22.hex;
    data[22]=objeto_json.Tabla.c22.uniformidad;
    labels[23]= objeto_json.Tabla.c23.hex;
    data[23]=objeto_json.Tabla.c23.uniformidad;
    labels[24]= objeto_json.Tabla.c24.hex;
    data[24]=objeto_json.Tabla.c24.uniformidad;
    labels[25]= objeto_json.Tabla.c25.hex;
    data[25]=objeto_json.Tabla.c25.uniformidad;
    labels[26]= objeto_json.Tabla.c26.hex;
    data[26]=objeto_json.Tabla.c26.uniformidad;
    labels[27]= objeto_json.Tabla.c27.hex;
    data[27]=objeto_json.Tabla.c27.uniformidad;
    labels[28]= objeto_json.Tabla.c28.hex;
    data[28]=objeto_json.Tabla.c28.uniformidad;
    labels[29]= objeto_json.Tabla.c29.hex;
    data[29]=objeto_json.Tabla.c29.uniformidad;
    labels[30]= objeto_json.Tabla.c30.hex;
    data[30]=objeto_json.Tabla.c30.uniformidad;
    labels[31]= objeto_json.Tabla.c31.hex;
    data[31]=objeto_json.Tabla.c31.uniformidad;
    s="<th> L </th>"+"<th> A </th>"+"<th> B </th>"+"<th> % </th>"+"<th> Delta </th>";
    s+="<tr><td>"+
         objeto_json.Tabla.c0.color.l+"</td>"+"<td>"+objeto_json.Tabla.c0.color.a+"</td>"+"<td>"+objeto_json.Tabla.c0.color.b+
         "</td>"+"<td>"+objeto_json.Tabla.c0.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c0.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c1.color.l+"</td>"+"<td>"+objeto_json.Tabla.c1.color.a+"</td>"+"<td>"+objeto_json.Tabla.c1.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c1.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c1.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c2.color.l+"</td>"+"<td>"+objeto_json.Tabla.c2.color.a+"</td>"+"<td>"+objeto_json.Tabla.c2.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c2.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c2.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c3.color.l+"</td>"+"<td>"+objeto_json.Tabla.c3.color.a+"</td>"+"<td>"+objeto_json.Tabla.c3.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c3.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c3.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c4.color.l+"</td>"+"<td>"+objeto_json.Tabla.c4.color.a+"</td>"+"<td>"+objeto_json.Tabla.c4.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c4.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c4.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c5.color.l+"</td>"+"<td>"+objeto_json.Tabla.c5.color.a+"</td>"+"<td>"+objeto_json.Tabla.c5.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c5.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c5.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c6.color.l+"</td>"+"<td>"+objeto_json.Tabla.c6.color.a+"</td>"+"<td>"+objeto_json.Tabla.c6.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c6.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c6.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c7.color.l+"</td>"+"<td>"+objeto_json.Tabla.c7.color.a+"</td>"+"<td>"+objeto_json.Tabla.c7.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c7.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c7.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c8.color.l+"</td>"+"<td>"+objeto_json.Tabla.c8.color.a+"</td>"+"<td>"+objeto_json.Tabla.c8.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c8.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c8.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c9.color.l+"</td>"+"<td>"+objeto_json.Tabla.c9.color.a+"</td>"+"<td>"+objeto_json.Tabla.c9.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c9.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c9.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c10.color.l+"</td>"+"<td>"+objeto_json.Tabla.c10.color.a+"</td>"+"<td>"+objeto_json.Tabla.c10.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c10.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c10.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c11.color.l+"</td>"+"<td>"+objeto_json.Tabla.c11.color.a+"</td>"+"<td>"+objeto_json.Tabla.c11.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c11.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c11.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c12.color.l+"</td>"+"<td>"+objeto_json.Tabla.c12.color.a+"</td>"+"<td>"+objeto_json.Tabla.c12.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c12.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c12.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c13.color.l+"</td>"+"<td>"+objeto_json.Tabla.c13.color.a+"</td>"+"<td>"+objeto_json.Tabla.c13.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c13.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c13.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c14.color.l+"</td>"+"<td>"+objeto_json.Tabla.c14.color.a+"</td>"+"<td>"+objeto_json.Tabla.c14.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c14.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c14.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c15.color.l+"</td>"+"<td>"+objeto_json.Tabla.c15.color.a+"</td>"+"<td>"+objeto_json.Tabla.c15.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c15.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c15.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c16.color.l+"</td>"+"<td>"+objeto_json.Tabla.c16.color.a+"</td>"+"<td>"+objeto_json.Tabla.c16.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c16.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c16.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c17.color.l+"</td>"+"<td>"+objeto_json.Tabla.c17.color.a+"</td>"+"<td>"+objeto_json.Tabla.c17.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c17.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c17.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c18.color.l+"</td>"+"<td>"+objeto_json.Tabla.c18.color.a+"</td>"+"<td>"+objeto_json.Tabla.c18.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c18.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c18.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c19.color.l+"</td>"+"<td>"+objeto_json.Tabla.c19.color.a+"</td>"+"<td>"+objeto_json.Tabla.c19.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c19.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c19.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c20.color.l+"</td>"+"<td>"+objeto_json.Tabla.c20.color.a+"</td>"+"<td>"+objeto_json.Tabla.c20.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c20.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c20.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c21.color.l+"</td>"+"<td>"+objeto_json.Tabla.c21.color.a+"</td>"+"<td>"+objeto_json.Tabla.c21.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c21.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c21.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c22.color.l+"</td>"+"<td>"+objeto_json.Tabla.c22.color.a+"</td>"+"<td>"+objeto_json.Tabla.c22.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c22.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c22.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c23.color.l+"</td>"+"<td>"+objeto_json.Tabla.c23.color.a+"</td>"+"<td>"+objeto_json.Tabla.c23.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c23.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c23.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c24.color.l+"</td>"+"<td>"+objeto_json.Tabla.c24.color.a+"</td>"+"<td>"+objeto_json.Tabla.c24.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c24.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c24.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c25.color.l+"</td>"+"<td>"+objeto_json.Tabla.c25.color.a+"</td>"+"<td>"+objeto_json.Tabla.c25.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c25.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c25.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c26.color.l+"</td>"+"<td>"+objeto_json.Tabla.c26.color.a+"</td>"+"<td>"+objeto_json.Tabla.c26.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c26.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c26.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c27.color.l+"</td>"+"<td>"+objeto_json.Tabla.c27.color.a+"</td>"+"<td>"+objeto_json.Tabla.c27.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c27.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c27.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c28.color.l+"</td>"+"<td>"+objeto_json.Tabla.c28.color.a+"</td>"+"<td>"+objeto_json.Tabla.c28.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c28.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c28.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c29.color.l+"</td>"+"<td>"+objeto_json.Tabla.c29.color.a+"</td>"+"<td>"+objeto_json.Tabla.c29.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c29.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c29.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c30.color.l+"</td>"+"<td>"+objeto_json.Tabla.c30.color.a+"</td>"+"<td>"+objeto_json.Tabla.c30.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c30.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c30.uniformidad+"</td>"+"/<tr>";
    s+="<tr><td>"+
              objeto_json.Tabla.c31.color.l+"</td>"+"<td>"+objeto_json.Tabla.c31.color.a+"</td>"+"<td>"+objeto_json.Tabla.c31.color.b+
              "</td>"+"<td>"+objeto_json.Tabla.c31.porcentaje+"</td>"+"<td>"+objeto_json.Tabla.c31.uniformidad+"</td>"+"/<tr>";


    Hacergrafica();
    document.getElementById("tabla").innerHTML= s;
    }
  }
  //var ruta="http://192.99.204.36/vision/img_logs/ejemploJson/ejemplo2.json";
  //"http://192.99.204.36/vision/img_logs/prueba.json?nocache=' + (new Date()).getTime()"
  xmlhttp.open("GET",ruta);
  xmlhttp.send();
}
conectar();
//var labels=["Piloncillo1","Piloncillo2","Piloncillo4","Piloncillo19","Piloncillo5","Piloncillo6","Piloncillo7"];
//var data=[95,80,94,83,74,79,89];
function Hacergrafica(){

  var config = {
          type: 'pie',
          data: {
              datasets: [{
                  data: data,
                  backgroundColor: labels,
                  label: 'Dataset 1'
              }]

          },
          options: {
              responsive: true
          }
      };

      var ctx = document.getElementById("canvas1").getContext("2d");
          window.myPie = new Chart(ctx, config);
}
