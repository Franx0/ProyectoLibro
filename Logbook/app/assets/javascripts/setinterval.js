window.onload =function(){
	var header=document.getElementById("_header");
	var photo1=("assets/photo1.jpg");
	var photo2=("assets/photo2.jpg");
	var photo3=("assets/photo3.jpg");
	var photo4=("assets/photo4.jpg");
	var photos=[photo2, photo3, photo4, photo1];
	var index=0;
	var interval=5000;

	function slide(){
		var chain="background-image: url('"+photos[index++%photos.length]+"')"+";"
		header.style.cssText=chain;
	};
	setInterval(slide, interval);
};