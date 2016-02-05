var logger = {
	log: function() {
		console.log('This is log method');
	},
	log1: function() {
		console.log('This is log1 method');
	}
};

//Create Event
$event.eventbus.Create('test');

// Subscribe Event
$event.eventbus.Subscribe('test', logger.log);

$event.eventbus.Subscribe('test', logger.log1);

// List eventbus
$event.eventbus.List();

// Publish Event
$event.eventbus.Publish('test');

// Unsubscribe Event
$event.eventbus.UnSubscribe('test', logger.log);
// List eventbus
$event.eventbus.List();
// Publish Event
$event.eventbus.Publish('test');

// Unsubscribe Event
$event.eventbus.UnSubscribe('test', logger.log1);
// List eventbus
$event.eventbus.List();
// Publish Event
$event.eventbus.Publish('test');