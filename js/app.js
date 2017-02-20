define(
	[
		'jquery',
		'underscore',
		'backbone',
		'marionette',
		'baseApp',

		'app/common/views/Nav_view',
		'app/common/views/Footer_view',

		'app/Router'
	],
	function(
		$,
		_,
		Backbone,
		Marionette,
		App,

		//Nav,
		//Footer,

		Router
	){
		'use strict';

		App.addRegions({
			nav: '#nav',
			main: '#main',
			footer: '#footer'
		});

		App.router = new Router();

		App.on( 'start', function() {
      /*
			var navView = new Nav();
			App.nav.show( navView );

			var footerView = new Footer();
			App.footer.show( footerView );
      */
			Backbone.history.start();
		});

		return App;
	}
);
