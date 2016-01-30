var logger = {
	log: function() {
		console.log('This is log method');
	},
	log1: function() {
		console.log('This is log1 method');
	}
};

//Create Event
MS.eventbus.Create('test');

// Subscribe Event
MS.eventbus.Subscribe('test', logger.log);

MS.eventbus.Subscribe('test', logger.log1);

// List eventbus
MS.eventbus.List();

// Publish Event
MS.eventbus.Publish('test');

// Unsubscribe Event
MS.eventbus.UnSubscribe('test', logger.log);
// List eventbus
MS.eventbus.List();
// Publish Event
MS.eventbus.Publish('test');

// Unsubscribe Event
MS.eventbus.UnSubscribe('test', logger.log1);
// List eventbus
MS.eventbus.List();
// Publish Event
MS.eventbus.Publish('test');