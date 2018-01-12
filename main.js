var current = document.getElementById('current');
var img = document.getElementsByClassName('piko');
for(var i=0;i<img.length;i++){
	img[i].addEventListener('click', display);
}
function display(){
	var slike = this.getAttribute('src');
	current.setAttribute('src', slike);
}