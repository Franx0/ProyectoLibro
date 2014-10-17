window.onload =function(){
	var header=document.getElementById("_header");
	var photo1=("img/photo1.jpg");
	var photo2=("img/photo2.jpg");
	var photo3=("img/photo3.jpg");
	var photo4=("img/photo4.jpg");
	var photo5=("img/photo55.jpg");	
	var photos=[photo2, photo3, photo4, photo5, photo1];
	var index=0;
	var interval=5000;

	function slide(){
		var chain="background-image: url('"+photos[index++%photos.length]+"')"+";"
		header.style.cssText=chain;
	};
	setInterval(slide, interval);
};