	var text=document.getElementById('input');
	var result=document.getElementById('preview');

text.onkeyup = function(){
	var key=window.event.keycode;
	result.innerHTML=marked(text.value);
	deleteLetter();
};

function deleteLetter(){
	var key=window.event.keycode;
	if(key===8){
		result.innerHTML=market(text.value);
	}else{
		result.innerHTML=marked(text.value);	
	};
};
