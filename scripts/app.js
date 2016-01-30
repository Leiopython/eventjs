(function(undefined) {

	var Eventbus = function() {

		var _self = this;

		var _events = {};

		_self.Create = function(name) {
			if (_events[name]) {
				console.log('Event already exists!')
			} else {
				_events[name] = [];
			}
		};

		_self.Subscribe = function(name, handler) {
			if (_events[name]) {
				_events[name] = _events[name] || [];
				_events[name].push(handler);
			} else {
				console.log("Event doesn't exists");
			}
		};

		_self.Publish = function(name, async) {
			if (_events[name]) {
				for (var i = _events[name].length - 1; i >= 0; i--) {
					if (async) {
						(function(index) {
							setTimeout(_events[name][index], 0);
						})(i);
					} else {
						try {
							_events[name][i]();
						} catch (ex) {
							// suppress
							console.log(ex);
						}
					}
				};
			} else {
				console.log("Event doesn't exists");
			}
		};

		_self.UnSubscribe = function(name, handler) {
			if (_events[name]) {
				var handlers = _events[name];
				var index = handlers.indexOf(handler);
				if (index != -1) {
					handlers.splice(index, 1);
					_events[name] = handlers;
					console.log("Handler Removed!");

				} else {
					console.log("Handler not found!")
				}
			} else {
				console.log("Event doesn't exists");
			}
		};

		// TODO: for development purpose only
		_self.List = function() {
			return _events;
		};

	};


	window.MS = {
		eventbus: new Eventbus()
	};

})();