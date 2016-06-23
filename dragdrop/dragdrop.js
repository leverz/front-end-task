var EventUtil = {
	addHandler: function (element, type, handler) {
		// body...
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent("on" + type, handler);
		}else{
			element["on" + type] = handler;
		}
	},
	remvoeHandler: function (element, type, handler) {
		// body...
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent("on" + type, handler);
		}else{
			element["on" + type] = null;
		}
	},
	getEvent: function (event) {
		// body...
		return event ? event : window.event;
	},
	getTarget: function (event) {
		// body...
		return event.target || event.srcElement;
	},
	preventDefault: function (event) {
		// body...
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation: function (event) {
		// body...
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
}
function EventTarget(){
	this.handlers = {};
}

EventTarget.prototype = {
	constructor: EventTarget,

	addHandler: function (type, handler) {
		// body...
		if(typeof this.handlers[type] === "undefined"){
			this.handlers[type] = [];
		}

		this.handlers[type].push(handler);
	},

	fire: function (event) {
		// body...
		if(!event.target){
			event.target = this;
		}
		if(this.handlers[event.type] instanceof Array){
			var handlers = this.handlers[event.type];
			for(var i = 0, len = handlers.length; i < len; i++){
				handlers[i](event);
			}
		}
	},
	remvoeHandler: function (type, handler) {
		// body...
		if(this.handlers[type] instanceof Array){
			var handlers = this.handlers[type];
			for(var i = 0, len = handlers.length; i < len; i++){
				if(handlers[i] === handler){
					break;
				}
			}
			handlers.splice(i, 1);
		}
	}
}
var DragDrop = function(){
	var dragdrop = new EventTarget();
	var dragging = null;
	var diffX = 0;
	var diffY = 0;

	function handleEvent(event) {
		// body...
		var target = event.target;

		switch(event.type){
			case "mousedown":
				console.log(target);
				if(target.className.indexOf("draggable") > -1){
					dragging = target;
					diffX = event.clientX - target.offsetLeft;
					diffY = event.clientY - target.offsetTop;
					dragdrop.fire({
						type: "dragstart",
						target: dragging,
						x: event.clientX,
						y: event.clientY
					});
				}
				break;
			case "mousemove":
				if(dragging !== null){
					dragging.style.left = (event.clientX - diffX) + "px";
					dragging.style.top = (event.clientY - diffY) + "px";
					console.log(dragging);
					dragdrop.fire({
						type: "drag",
						target: dragging,
						x: event.clientX,
						Y: event.clientY
					});
				}
				break;
			case "mouseup":
				dragdrop.fire({
					type: "dragend",
					target: dragging,
					x: event.clientX,
					Y: event.clientY
				});
				dragging = null;
				break;
		}
	}
	dragdrop.enable = function () {
		document.addEventListener("mousedown", handleEvent);
		document.addEventListener("mousemove", handleEvent);
		document.addEventListener("mouseup", handleEvent);
	}
	dragdrop.disable = function () {
		document.removeEventListener("mousedown", handleEvent);
		document.removeEventListener("mousemove", handleEvent);
		document.removeEventListener("mouseup", handleEvent);
	}
	return dragdrop;
}