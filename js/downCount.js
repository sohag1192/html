! function(e) {
	e.fn.downCount = function(t, n) {
		function r() {
			var e = new Date(o.date) - i();
			if (e < 0) return clearInterval(a), void(n && "function" == typeof n && n());
			var t = Math.floor(e / 864e5),
				r = Math.floor(e % 864e5 / 36e5),
				d = Math.floor(e % 36e5 / 6e4),
				s = Math.floor(e % 6e4 / 1e3);
			t = String(t).length >= 2 ? t : "0" + t, r = String(r).length >= 2 ? r : "0" + r, d = String(d).length >= 2 ? d : "0" + d, s = String(s).length >= 2 ? s : "0" + s;
			var u = 1 === t ? "day" : "days",
				l = 1 === r ? "hour" : "hours",
				h = 1 === d ? "minute" : "minutes",
				c = 1 === s ? "second" : "seconds";
			f.find(".days").text(t), f.find(".hours").text(r), f.find(".minutes").text(d), f.find(".seconds").text(s), f.find(".days_ref").text(u), f.find(".hours_ref").text(l), f.find(".minutes_ref").text(h), f.find(".seconds_ref").text(c)
		}
		var o = e.extend({
			date: null,
			offset: null
		}, t);
		o.date || e.error("Date is not defined."), Date.parse(o.date) || e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
		var f = this,
			i = function() {
				var e = new Date,
					t = e.getTime() + 6e4 * e.getTimezoneOffset();
				return new Date(t + 36e5 * o.offset)
			},
			a = setInterval(r, 1e3)
	}
}(jQuery);