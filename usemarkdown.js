//Here we call Markdown
var text=document.getElementById('input');
var result=document.getElementById('preview');
var change=document.getElementById('boton');

text.onkeyup = function(){
	result.innerHTML=marked(text.value);
};

//Here we change 'Preview' class and 'Buttons' class
var resultClass=result.classList;
var texto1=document.getElementById('helvetica');
var texto2=document.getElementById('alex');
var texto3=document.getElementById('kaushan');

texto1.onclick=function(){
	buttonDefault('default', texto1);
};

texto2.onclick=function(){
	buttonDefault('alex_regular', texto2);
};

texto3.onclick=function(){
	buttonDefault('kaushan_regular', texto3);
};

function buttonDefault(font, button){
	if(resultClass.contains(font)){
		resultClass.remove(font);
		button.classList.remove('activeButtons');
	}
	else{
		resultClass.add(font);
		button.classList.add('activeButtons');
	}
};
