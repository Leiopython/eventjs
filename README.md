# eventjs
eventjs will help you to manage you custom javascript events.

## Setup

##### npm
This package is published through npm under the name ```ms-eventjs``` 
``` bash
npm install ms-eventjs
```

##### bower
This package is published through bower under the name ```ms-eventjs``` 
``` bash
bower install ms-eventjs
```

Once installed, simply add ```dist/eventjs.min.js``` file into your html file.

## Usage

#####Create event: 
``` js
$event.eventbus.Create('eventName');
```

#####Subscribe event: 
``` js
$event.eventbus.Subscribe('eventName', Namespace.someFunction);
```

#####Publish event: 
``` js
// excecute all handlers in sync 
$event.eventbus.Publish('eventName');

// excecute all handlers in async 
$event.eventbus.Publish('eventName', true);

```

#####UnSubscribe event: 
``` js
$event.eventbus.UnSubscribe('eventName', Namespace.someFunction);
```

## Examples
You can also checkout sample code in [Examples](Examples) folder.

##TODO
1.  Unit testing
    http://jasmine.github.io/2.4/introduction.html
2.  travis-ci integration
3.  Integrate document.events


## Watcher
you can subscribe to the changes of any object. 
E.g.
``` js
var obj = {fName: 'Manoj', lName: 'Shevate'};
$event.watch(obj, function(c){
	// This function will be called whenever any changes made to the object "obj"
});
```
