//Here we call Markdown
var text=document.getElementsByClassName('mywork_markdown');
var result=document.getElementById('preview');

text[0].onkeyup = function(){
	console.log("hoala")
	result.innerHTML=marked(text[0].value);
};

//Here we change 'Preview' class and 'Buttons' class
var resultClass=result.classList;
var texto1=document.getElementById('helvetica');
var texto2=document.getElementById('alex');
var texto3=document.getElementById('kaushan');

texto1.onclick=function(){
	texto2.className=('alex_regular classButtons');
	texto3.className=('kaushan_regular classButtons');
	buttonDefault('default', texto1);
};

texto2.onclick=function(){
	texto1.className=('default classButtons');
	texto3.className=('kaushan_regular classButtons');
	buttonDefault('alex_regular', texto2);
};

texto3.onclick=function(){
	texto1.className=('default classButtons');
	texto2.className=('alex_regular classButtons');
	buttonDefault('kaushan_regular', texto3);
};

function buttonDefault(font, button){

	if(resultClass.contains(font)){
		result.className=('markDown');	
		button.className=(font+' classButtons');
	}
	else{
		result.className=(font+' markDown');
		button.className=(font+' classButtons'+' activeButtons');
	}
};

//Drawing variable
var myBoard = new DrawingBoard.Board('proy_drawing');

//Footer animation
var foot=document.getElementsByClassName('footer');

window.onscroll=function(event){
	if(window.innerHeight+(window.pageYOffset/2.7)*(window.innerHeight/window.innerWidth) >= document.body.offsetHeight){
		foot[0].className=('footer foot_end nav_color');
	}
	else{
		foot[0].className=('footer nav_color');
	}
};

//Submit menu
//Submit
