/* Uploader.js for uploading images in Biu Library */

var uploader;

window.onload = function() {
	uploader = document.getElementById('imgloader');
	uploader.ondragenter = ignoreDrag;
	uploader.ondragover = ignoreDrag;
	uploader.ondrop = drop;
};

function ignoreDrag(e) {
	e.stopPropagation();
	e.preventDefault();
};

function drop(e) {
	e.stopPropagation();
	e.preventDefault();
	
	var data = e.dataTransfer;
	var files = data.files;
	
	processFiles(files);
};

function processFiles(files) {
	var file = files[0];
	var reader = new FileReader();
	
	reader.onload = function(e) {
		uploader.style.backgroundImage = "url('" + e.target.result + "')";
	};
		
	reader.readAsDataURL(file);
};