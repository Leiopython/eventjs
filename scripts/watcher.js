(function(undefined) {
	window.$event = window.$event || {};

	(function(ev) {

		ev.watch = function(obj, callback) {

			if (callback && {}.toString.call(callback) === '[object Function]' && obj) {
				if (Object.prototype.toString.call(obj) === '[object Array]') {
					Array.observe(obj, function(c) {
						callback(c);
					});
				} else {
					Object.observe(obj, function(c) {
						callback(c);
					});
				}
			}
		};

	})(window.$event);


})();