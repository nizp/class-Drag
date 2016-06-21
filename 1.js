function Drag(id){
	this.obj = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
	var _this = this;
	this.obj.addEventListener('mousedown',function(ev){
		_this.fnDown(ev);
	});
}

Drag.prototype.fnDown = function(ev){
	this.disX = ev.clientX - this.obj.offsetLeft;
	this.disY = ev.clientY - this.obj.offsetTop;
}
