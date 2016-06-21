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

	this.disX = ev.pageX - this.obj.offsetLeft;
	this.disY = ev.pageY - this.obj.offsetTop;
	
	document.addEventListener('mousemove',move);
	
	function move(ev){
		
	}
	
}
Drag.prototype.fnMove = function(ev){
	this.obj.style.left = ev.pageX - this.disX + 'px';
	this.obj.style.top = ev.pageY - this.disY + 'px';
}

