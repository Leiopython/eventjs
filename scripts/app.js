(function(undefined) {

	var Eventbus = function() {

		var _self = this;

		var _events = {};

		_self.Create = function(name) {
			_events[name] = _events[name] || [];
		};

		_self.Subscribe = function(name, handler) {
			if (_events[name]) {
				_events[name] = _events[name] || [];
				_events[name].push(handler);
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
							console.log(ex);
							// suppress
						}
					}
				};
			}
		};

		_self.UnSubscribe = function(name) {
			// TODO:
		};

		// TODO: for development purpose only
		_self.List = function() {
			return _events;
		};

	};


	window.MS = {eventbus: new Eventbus()};

})();