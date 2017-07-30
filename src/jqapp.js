/*global jQuery, $namespace$*/
jQuery(function ($) {
    'use strict';

    window.$namespace$ = $.extend(window.$namespace$ || {}, {
        config: {
            env: 'prod',
			demo: 1
        },
        app: null // Will be set after the definition
    });

    function $AppName$() {
        this.init();
    }

    $AppName$.prototype = {
        constructor: $AppName$,

        // DOM elements
        // ...

        // Properties
        // ...

        // Methods
        init: function () {
			// TODO: Get child controller
            // this.demoCtrl = $('#demo').demo().data('demo');
        },
		
		// TODO: Add more methods here
		
		$END$
    };

    window.$namespace$.app = new $AppName$();
});