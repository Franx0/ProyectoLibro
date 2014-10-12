var text=document.getElementById('input');
var result=document.getElementById('preview');
var change=document.getElementById('boton');

text.onkeyup = function(){
	result.innerHTML=marked(text.value);
};

var buttons=document.getElementById('button_container');
var resultClass=result.classList;

buttons.onclick=function(){
	buttons.firstChild=buttonDefault();
};

function buttonDefault(){
	if(resultClass.contains('default')){
		resultClass.remove('default');
		if(buttons.firstNode.classList.contains('activeButtons')){
			console.log('hola');
			buttons.firstNode.classList.remove('activeButtons');
		}
	}else{
		resultClass.add('default');
		console.log('adios');
		buttons.firstNode.classList.add('activeButtons');
		console.log('UWIN');
	}
};
