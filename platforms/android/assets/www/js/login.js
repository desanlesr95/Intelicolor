function verificar(){
    var user=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    if( (user=="alexis" &&  pass=="vomito")||(user=="luis" &&  pass=="1234" )){
        location.href="interfaz.html";
    }
    else{
      alert("Usuario o contraseña incorrecta");
    }

}
