window.onload = function() {
    var photos=document.getElementByClassName('format');
    var photos_array=['img/photo1.jpg', 'img/photo2.jpg', 'img/photo3.jpg', 'img/photo4.jpg'];
	var index=0;
    var interval = 5000;

    function slide() {
        photos.style.backgroundImage ="url('+ photos_array[index++%photos_array.length]+');";
    };

    setInterval(slide, interval);
}

