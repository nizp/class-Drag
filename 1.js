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
	
	var that = this;

	this.disX = ev.pageX - this.obj.offsetLeft;
	this.disY = ev.pageY - this.obj.offsetTop;
	
	document.addEventListener('mousemove',move);
	document.addEventListener('mousedown',fnDown);
	
	function move(ev){
		that.fnMove(ev);
	}
}
Drag.prototype.fnMove = function(ev){
	this.obj.style.left = ev.pageX - this.disX + 'px';
	this.obj.style.top = ev.pageY - this.disY + 'px';
}

