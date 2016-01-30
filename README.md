# eventjs
JS library to create custom events

## Setup

### Node.js
This package is published through npm under the name ```ms-eventjs``` 
``` bash
npm install ms-eventjs
```
Once installed, simply add ```scripts/app.js``` file into your html file.

## Usage

### Sample code 
#####Create event: 
``` js
MS.eventbus.Create('eventName');
```

#####Subscribe event: 
``` js
MS.eventbus.Subscribe('eventName', Namespace.someFunction);
```

#####Publish event: 
``` js
// excecute all handlers in sync 
MS.eventbus.Publish('eventName');

// excecute all handlers in async 
MS.eventbus.Publish('eventName', true);

```

#####UnSubscribe event: 
``` js
MS.eventbus.UnSubscribe('eventName', Namespace.someFunction);
```

### Examples
You can also checkout sample code in [Examples](Examples) folder.
