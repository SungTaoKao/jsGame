var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var reticleImg = new Image();
reticleImg.src = 'src/target.png';



context.drawImage(reticleImg, 0, 0, 20, 20);

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: Math.round((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width),
		y: Math.round((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height);
	}
}