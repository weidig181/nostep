hack.elevator = function(iMaxCapacity) {
	this.currentFloor = function() { return 0; };
	this.Calls = [];
	this.maxCapacity = iMaxCapacity;
}