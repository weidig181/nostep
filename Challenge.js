var oChallenge = new hack.challenge();

hack.challenge = function(jsonString)  {
	var theChallenge = JSON.parse(jsonString);
    this._id; 
    this.challengeId = theChallenge.challengeID;
    this.challengeDesc = theChallenge.challengeDesc;
    this.isActive = theChallenge.isActive;
    this.minfloor = theChallenge.minfloor;
    this.maxfloor = theChallenge.maxfloor;
    this.numberOfElevators = theChallenge.numberOfElevators;
    this.maxCapacity = theChallenge.maxCapacity;
    this.secondsPerfloor = theChallenge.secondsPerfloor;
    this.secondsPerfloorOverTenfloors = theChallenge.secondsPerfloorOverTenfloors;
    this.timeToOpenDoor = theChallenge.timeToOpenDoor;
    this.timeToCloseDoor = theChallenge.timeToCloseDoor;
    this.Calls = [];
	theChallenge.calls.forEach(function(oCall) {
		this.Calls.push(new hack.call(oCall))
	});
	this.Stops = [];
	this.Elevators = [];
	for (i = 0; i < this.numberOfElevators; i++) { 
		this.Elevators.push(new hack.elevator(this.maxCapacity));
	}
}