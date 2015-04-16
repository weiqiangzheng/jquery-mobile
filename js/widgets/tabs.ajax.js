/*!
 * jQuery Mobile Tabs Ajax Handling @VERSION
 * http://jquerymobile.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Tabs
//>>group: Widgets
//>>description: Extension to make Tabs widget aware of jQuery Mobile's navigation
//>>docs: http://api.jquerymobile.com/tabs/
//>>demos: http://demos.jquerymobile.com/@VERSION/tabs/

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [
			"jquery",
			"../defaults",
			"../navigation/path",
			"../navigation/base",
			"jquery-ui/tabs" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
} )( function( $ ) {

return $.widget( "ui.tabs", $.ui.tabs, {
	_isLocal: function( anchor ) {
		var path, baseUrl, absUrl;

		if ( $.mobile.ajaxEnabled ) {
			path = $.mobile.path;
			baseUrl = path.parseUrl( $.mobile.base.element().attr( "href" ) );
			absUrl = path.parseUrl( path.makeUrlAbsolute( anchor.getAttribute( "href" ),
				baseUrl ) );

			return ( path.isSameDomain( absUrl.href, baseUrl.href ) &&
				absUrl.pathname === baseUrl.pathname );
		}

		return this._superApply( arguments );
	}
} );

} );