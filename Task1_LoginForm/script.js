
function validate(){
   
   var x=document.forms['form']['name'].value;
   var y=document.forms['form']['passwordl'].value;



   if (x.length==0){
      document.getElementById('namef').innerHTML='You should provide the login';
      document.getElementById('passwordf').innerHTML='';
      return false;
  } else {
  	  document.getElementById('namef').innerHTML ='';
  }

   if (y.length==0){
      document.getElementById('passwordf').innerHTML='You should provide the password';
      return false;
   }
   else {
   	 document.getElementById('passwordf').innerHTML='';
   }
  	window.location = 'index2.html';
 	 return false;
}
