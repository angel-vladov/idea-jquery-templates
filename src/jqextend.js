(function ($) {
    'use strict';

    $.fn.extend({
        $extendName$: $extendName$
        $END$
    });

    ////////////////////

    function $extendName$() {
        // TODO: Replace with your code here
        return this.each(function() {
            this.checked = true;
        });
    }

}) (jQuery);