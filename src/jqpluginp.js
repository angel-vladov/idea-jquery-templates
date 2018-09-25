/*global jQuery*/
(function ($) {
    'use strict';

    $.fn.$pluginExample$ = function (option/*, varArgs*/) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function () {
            var $element = $(this);
            var ctrl = $element.data('$pluginExample$');

            if (!ctrl) {
                var opts = $.extend({},
                    $.fn.$pluginExample$.defaults,
                    typeof option === 'object' && option
                );

                $element.data('$pluginExample$', (ctrl = new $PluginExample$(this, opts)));
            }

            if (typeof option === 'string') {
                ctrl[option].apply(ctrl, args);
            }
        });
    };

    $.fn.$pluginExample$.defaults = {
        // TODO: Default values go here
        defaultValue: 1
    };

    function $PluginExample$(element, options) {
        this.init(element, options);
    }

    $PluginExample$.prototype = {
        constructor: $PluginExample$,

        // Properties
        // ...

        // Methods
        /**
         * @private
         * @param {jQuery} element
         * @param {object} options
         */
        init: function (element, options) {
            this.options = options;
            this.$element = $(element);

            // TODO: Add initialization code here
        },

        demo: function() {
            this.$element.addClass('demo');
            console.log('demo');
        }

        // TODO: Add additional methods here
        $END$
    };
}) (jQuery);
