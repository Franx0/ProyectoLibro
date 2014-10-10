var textArea=document.getElementById('input');

textArea.onkeypress = function(){
	var text=document.getElementById('input').value;
	var result=document.getElementById('preview');
	result.innerHTML=marked(text);	
};

