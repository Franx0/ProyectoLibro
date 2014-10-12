/*window.onload = function() {
    var photos=document.getElementById('_header');
    var photos_array=['img/photo1.jpg', 'img/photo2.jpg', 'img/photo3.jpg', 'img/photo4.jpg'];
	var index=0;
    var interval = 5000;

    function slide() {
        photos.style.backgroundImage ="url('+ photos_array[index++%photos_array.length]+');";
    };

    setInterval(slide, interval);
};*/

/*window.onload =function(){
	console.log('hello world');
	var header=document.getElementById("_header");
	var photo1=header.style('img/photo1.jpg');
	var photo2=header.style('img/photo2.jpg');
	var photo3=header.style('img/photo3.jpg');
	var photo4=header.style('img/photo4.jpg');
	var photo5=header.style('img/photo5.jpg');
	var photos=[photo1, photo2, photo3, photo4, photo5];
	var index=0;
	var interval=5000;

	function slide(){
		header.style.backgroundImage="url('"+ photos[index++%photos.length]+"')";
	};
	setInterval(slide, interval);
};*/

/*var header=document.getElementById("_header").className.backgroundImage;
window.onload=function(){
header.backgroundImage = "url('img/photo1.jpg')";
	if(header.contains("url('img/photo1.jpg')")){
	header.style.backgroundImage = "url('img/photo2.jpg')";
	}
};
header.style.backgroundImage = "url('img/photo2.jpg')";
header.style.backgroundImage = "url('img/photo3.jpg')";
header.style.backgroundImage = "url('img/photo4.jpg')";
header.style.backgroundImage = "url('img/photo5.jpg')";*/