var config = {
	address:
		"localhost", // Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "", "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [
		"127.0.0.1",
		"::ffff:127.0.0.1",
		"::1"
	], // Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language:
		"en",
	timeFormat: 12,
	units:
		"imperial",

	modules: [
		{
			module:
				"alert"
		},
		{
			module:
				"updatenotification",
			position:
				"top_bar"
		},
		{
			module:
				"clock",
			position:
				"top_left"
		},
		{
			module:
				"calendar",
			header:
				"US Holidays",
			position:
				"top_left",
			config: {
				calendars: [
					{
						symbol:
							"calendar-check-o ",
						url:
							"webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module:
				"compliments",
			position:
				"lower_third"
		},
		{
			module:
				"currentweather",
			position:
				"top_right",
			config: {
				location:
					"Houston",
				locationID:
					"4699066", //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid:
					"0831a14e659349d397fa214d14bc4a0e"
			}
		},
		{
			module:
				"weatherforecast",
			position:
				"top_right",
			header:
				"Weather Forecast",
			config: {
				location:
					"Houston",
				locationID:
					"4699066", //ID from http://www.openweathermap.org/help/city_list.txt
				appid:
					"0831a14e659349d397fa214d14bc4a0e"
			}
		},
		{
			module:
				"newsfeed",
			position:
				"bottom_bar",
			config: {
				feeds: [
					{
						title:
							"New York Times",
						url:
							"http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
