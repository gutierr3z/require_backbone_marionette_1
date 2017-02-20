define(
	[
		'jquery',
		'underscore',
		'backbone',
		'marionette',
		'baseApp',

		//'app/home/Controller',
		//'app/about/Controller',
		//'app/contact/Controller'
	],
	function(
		$,
		_,
		Backbone,
		Marionette,
		App,

		//HomeController,
		//AboutController,
		//ContactController
	){
		'use strict';

		var Router = Marionette.AppRouter.extend({
      /*
			controller: _.extend(
				new HomeController(),
				new AboutController(),
				new ContactController()
			),
      */
			appRoutes: {
				'': 'home',
				'home': 'home',
				//'about': 'about',
				//'contact': 'contact',
				'*default': 'home'
			}
		});

		return Router;
	}
);
