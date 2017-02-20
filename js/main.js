require.config({

	baseUrl: 'js/',

	paths: {
		jquery: 'libs/jquery',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		marionette: 'libs/backbone.marionette_v2',
		baseApp: 'baseApp'
	},

	shim: {
		'underscore': {
			deps: [ 'jquery' ],
			exports: '_'
		},
		'backbone': {
			deps: [ 'jquery', 'underscore' ],
			exports: 'Backbone'
		}
		,
		'marionette': {
			deps: [ 'backbone' ],
			exports: 'Marionette'
		}
	}
});

require( [ 'app' ], function( App ) {

	App.start();
});
