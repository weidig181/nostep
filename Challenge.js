var oChallenge = new hack.challenge();

hack.challenge = function(jsonString)  {
	this.getStops = function() {
		var aStops = { challengeId: this.challengeId };
		aStops.stops = this.Stops;

		var testObject = {
			"challengeId": 1,
			"stops": [
				{
					"stopId": 1,
					"elevatorId": 1,
					"floor": 1,
					"pickup": [1],
					"dropoff": []
				},
				{
					"stopId": 64,
					"elevatorId": 1,
					"floor": 5,
					"pickup": [],
					"dropoff": [34]
				}
			]
		};
		return JSON.stringify(testObject);
	}
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