define(
	[
		'jquery',
		'underscore',
		'backbone',
		'marionette'
	],
	function(
		$,
		_,
		Backbone,
		Marionette
	){
		'use strict';

		var App = new Marionette.Application();

		return App;
	}
);
