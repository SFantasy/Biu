/* choose file */
function processFiles(files) {
	var file = files[0];
	var reader = new FileReader();
	
	reader.onload = function(e) {
		var output = document.getElementById('fileOutput');
		output.textContent = e.target.result;
	};
	
	reader.readAsText(file);
}

function showFileInput() {
	var fileInput = document.getElementById('fileInput');
	fileInput.click();
}

/* choose images */

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
	
	processImage(files);
};

function processImage(files) {
	var file = files[0];
	var reader = new FileReader();
	
	reader.onload = function(e) {
		uploader.style.backgroundImage = "url('" + e.target.result + "')";
	};
		
	reader.readAsDataURL(file);
};

