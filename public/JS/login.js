var inputUser =document.getElementById('user');
var inputPwd=document.getElementById('pwd');
var button= document.getElementById('button')

button.onclick = function() {
	if (inputUser.value==="usuario1"&&inputPwd.value==="password1"){
		alert("successful login");
	}else{
		alert("you are a loser");
	}
};
