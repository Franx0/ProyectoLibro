	var text=document.getElementById('input');
	var result=document.getElementById('preview');
	var change=document.getElementById('boton');

text.onkeyup = function(){
	var key=window.event.keycode;
	result.innerHTML=marked(text.value);
};

change.onclick = function(){
	var get=document.getElementById('preview').classList;
	if(get.contains('markDown2')){
		get.remove('markdDown2');
		get.add('markDown3');
	}else{
		get.add('markDown2');
	}
};
