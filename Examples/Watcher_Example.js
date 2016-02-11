var obj = {
	fName: 'John',
	lName: 'Doe'
};

var arr = ['John', 'Doe'];

// Handler for object
$event.watch(obj, function(callbacks){
	console.log('Object watcher handler -> ', callbacks);
});

// Handler for Array
$event.watch(arr, function(callbacks){
	console.log('Object watcher handler -> ', callbacks);
});


// Update object
obj.newProp = 'Test';
// This will trigger the handler on the give object

// Update array
arr.push('Test');
// This will trigger the handler on the give object