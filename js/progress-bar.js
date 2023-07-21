(function($) {
    // start writing function
    $.fn.jprogress = function(options) {
        
        // settings
        var settings = $.extend({
            animateTime: 3000,
            //background: '#4ABFF7'
        }, options);
        
        // return everytime when plugin function get called
        return this.each(function() {
            
            // define plugin obj
            var mainobj = $(this);
            
            // create method
            progressmethod = {
                //progress init
                init: function(bar) {
                    if(bar != 'undefined') {
                        $(mainobj).addClass('progress_single');
                        $(mainobj).wrap('<div class="progress-outer-wrapper"></div>');
                        $(mainobj).css("background", settings.background);
                    }
                }
            };
            
            //check if object is exist
            if(mainobj.length > 0) {
                // call init method
                progressmethod.init();
                
                // get progress percent
                var percent = $(mainobj).attr('data-progress');
                $(mainobj).html('<span>'+percent+'</span>');
                $(mainobj).children("span").css("opacity", "0");                
                                
                // animate progress bars
                $(mainobj).animate({width: percent}, settings.animateTime, function() {
                    $(mainobj).children("span").css("opacity", "1");  
                });
            }
            
        });
    }
}(jQuery));