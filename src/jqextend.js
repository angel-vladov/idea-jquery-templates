(function ($) {
    'use strict';

    $.fn.extend({
        $extendName$: $extendName$
        $END$
    });

    ////////////////////

    function $extendName$() {
        return this.each(function() {
            this.checked = true;
        });
    }

}) (jQuery);