/*;(function($){
	$.fn.extend({
		"color":function(value){
			return this.css("color",value);
		}
	})
})(jQuery);*/


(function($){
     $.fn.openActive = function(value){
        this.css("color",value);
        return this;
     }
    $.fn.extend({
        "color":function(value){
            this.css("color",value);
            return this;
        },
         "background":function(value){
            this.css("background",value);
            return this;
        },
    })
})(jQuery);

