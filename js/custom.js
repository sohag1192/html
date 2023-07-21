$(document).ready(function(){
    "use strict";
  /*
  ==============================================================
   Headin Adjusting  Script Start
  ==============================================================
  */
    //if($('.main-heading').length){
      //$('.main-heading').parent().parent('section').css('padding-top','66px');
    //}
  /*
  ==============================================================
    COUNTDOWN  Script Start
  ==============================================================
  */
    if($('.countdown').length){
      $('.countdown').downCount({ date: '1/1/2018 12:00:00', offset: +1 });
    }
  /*
  ==============================================================
     Main Banner SLIDER SCRIPT
  ==============================================================
  */
    if($('.mg_slider1').length){
      $('.mg_slider1').slick({
          fade:true,
          autoplay: true,
          autoplaySpeed: 1200,
      });
    }
  /*
    ============================================================
       Main Banner Javascript
    ============================================================
  */
    if ($('.slider').length) {
        $('.slider').on('init', function(e, slick) {
            var $firstAnimatingElements = $('.slick-slide:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        $('.slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        $('.slider').slick({
            arrows:false,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            fade: true
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
    }
  /*
  ==============================================================
     Project SLIDER SCRIPT
  ==============================================================
  */
    if($('.bs-project-slider').length){
      $('.bs-project-slider').slick({
          fade:true,
          autoplay: true,
          autoplaySpeed: 1200,
        });
    }
  /*
  ==============================================================
     Testimonial SLIDER SCRIPT
  ==============================================================
  */
    if($('.testimonial-slider').length){
      $('.testimonial-slider').slick({
          dots:false,
          fade:true,
          arrows:true
      });
    }
  /*
    ============================================================
       Counter Javascript
    ============================================================
  */
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }
  /*
  ==============================================================
     Brand SLIDER SCRIPT
  ==============================================================
  */
    if($('.brand-slider').length){
      $('.brand-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 6,
        arrows: false,
        responsive: [
        {
            breakpoint: 1367,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 481,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
      });
    }
  /*
  ==============================================================
     FEATURE SLIDER SCRIPT
  ==============================================================
  */
    if($('.feature-thumb-slider').length){
      $('.feature-thumb-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        arrows: true,
        responsive: [
        {
            breakpoint: 1367,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1,
              centerMode: false
            }
          },
          {
            breakpoint: 481,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
      });
    }
  /*
  ==============================================================
     PROGRESS BAR SCRIPT
  ============================================================== 
  */
  if($('.progressbars').length){
    $(".progressbars").jprogress();
      $(".progressbarsone").jprogress({
        background: ""
      });
      var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-109049373-1']);
        _gaq.push(['_setDomainName', 'mesterthemes.com']);
        _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }
  /*
  ==============================================================
    COMMENT WRAP SCRIPT
  ============================================================== 
  */
  if($('.comment-wrap').length){
    $( ".comment-wrap" ).closest('section').css( "overflow", "hidden" );
  }
  /*
  ==============================================================
    FILE UPLOAD SCRIPT
  ============================================================== 
  */
  if($('#uploadBtn').length){   
    document.getElementById("uploadBtn").onchange = function () {
        document.getElementById("uploadFile").value = this.value;
    };
  }
  if($('.fileUpload,.ab-submit').length){
    $( ".fileUpload,.ab-submit" ).parent().css( "position", "relative" );
  }
  /*
    ============================================================
       Pretty Photo Javascript
    ============================================================
  */
    if ($("a[data-rel='prettyPhoto']").length) {
        $("a[data-rel='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: true
        });
    }
  /*
  ============================================================
    Custom Select Menu Slider Javascript
  ============================================================
  */
  if ($('select').length) {
      $('select').each(function() {
          var $this = $(this),
              numberOfOptions = $(this).children('option').length;
          $this.addClass('hidden');
          $this.wrap('<div class="text"></div>');
          $this.after('<div class="styledselect"></div>');
          var $styledselect = $this.next('div.styledselect');
          $styledselect.text($this.children('option').eq(0).text());
          var $list = $('<ul />', {
              'class': 'options'
          }).insertAfter($styledselect);
          for (var i = 0; i < numberOfOptions; i++) {
              $('<li />', {
                  text: $this.children('option').eq(i).text(),
                  rel: $this.children('option').eq(i).val()
              }).appendTo($list);
          }
          var $listItems = $list.children('li');
          $styledselect.click(function(e) {
              e.stopPropagation();
              $('div.styledselect.active').each(function() {
                  $(this).removeClass('active').next('ul.options').hide();
              });
              $(this).toggleClass('active').next('ul.options').toggle();
          });
          $listItems.click(function(e) {
              e.stopPropagation();
              $styledselect.text($(this).text()).removeClass('active');
              $this.val($(this).attr('rel'));
              $list.hide();
          });
          $(document).click(function() {
              $styledselect.removeClass('active');
              $list.hide();
          });
      });
  }
  /*
  ============================================================== 
    DL Responsive Menu
  ============================================================== 
  */
    if(typeof($.fn.dlmenu) == 'function'){
      $('#mg-responsive-navigation').each(function(){
        $(this).find('.dl-submenu').each(function(){
        if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
          var parent_nav = $('<li class="menu-item mg-parent-menu"></li>');
          parent_nav.append($(this).siblings('a').clone());
          
          $(this).prepend(parent_nav);
        }
        });
        $(this).dlmenu();
      });
    }
  /*
    ============================================================
         Masonry Gallery Javascript
    ============================================================
  */
  if ($('.masonry').length) {
      $(".masonry").imagesLoaded(function() {
          $(".masonry").masonry();
      });
  }
  if ($('.items-grid').length) {
      var fselector = 0,
          itemsGrid = $(".items-grid");
      (function($) {
          "use strict";
          var isotopeMode;
          if (itemsGrid.hasClass("masonry")) {
              isotopeMode = "masonry";
          } else {
              isotopeMode = "fitRows"
          }
          itemsGrid.imagesLoaded(function() {
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
          });
          $(".port-filter").on('click', '.filter', function() {
              $(".filter").removeClass("active");
              $(this).addClass("active");
              fselector = $(this).attr('data-filter');
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
              return false;
          });
      })(jQuery);
  }
  if ($('#items-grid2').length) {
      var fselector = 0,
          itemsGrid = $("#items-grid2");
      (function($) {
          "use strict";
          var isotopeMode;
          if (itemsGrid.hasClass("masonry")) {
              isotopeMode = "masonry";
          } else {
              isotopeMode = "fitRows"
          }
          itemsGrid.imagesLoaded(function() {
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
          });
          $(".port-filter").on('click', '.filter', function() {
              $(".filter").removeClass("active");
              $(this).addClass("active");
              fselector = $(this).attr('data-filter');
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
              return false;
          });
      })(jQuery);
  }
  if ($('#projects-grid').length) {
      var fselector = 0,
          itemsGrid = $("#projects-grid");
      (function($) {
          "use strict";
          var isotopeMode;
          if (itemsGrid.hasClass("masonry")) {
              isotopeMode = "masonry";
          } else {
              isotopeMode = "fitRows"
          }
          itemsGrid.imagesLoaded(function() {
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
          });
          $(".port-filter").on('click', '.filter', function() {
              $(".filter").removeClass("active");
              $(this).addClass("active");
              fselector = $(this).attr('data-filter');
              itemsGrid.isotope({
                  itemSelector: '.mix',
                  layoutMode: isotopeMode,
                  filter: fselector
              });
              return false;
          });
      })(jQuery);
  }
  /*
    ============================================================
         Input Stepper Javascript
    ============================================================
  */
  /**jquery.input-stepper.js**/
  ;(function (root, $, undefined) {

    var pluginName = "inputStepper";
    var defaults = {
      selectorButtonIncrease: '[data-input-stepper-increase]',
      selectorButtonDecrease: '[data-input-stepper-decrease]',
      dataAttributeIncrease: 'input-stepper-increase',
      dataAttributeDecrease: 'input-stepper-decrease',
      classNameDisabled: 'is-disabled',
      selectorInput: 'input',
      initialValue: null,
      min: 0,
      max: Infinity
    };
    var tmp = $(this).siblings(":text").focus();
    // The actual plugin constructor
    function Plugin( element, options ) {
      this.element = element;

      this.options = $.extend( {}, defaults, options) ;

      this._defaults = defaults;
      this._name = pluginName;

      return this.init();
    }

    Plugin.prototype = {

      init: function () {
        var _this = this;

        // Cache elements
        this.$el = $(this.element);
        this.$input = this.$el.find(this.options.selectorInput);
        this.$decreaseButton = this.$el.find(this.options.selectorButtonDecrease);
        this.$increaseButton = this.$el.find(this.options.selectorButtonIncrease);

        this.min = this.$input.attr('min') || this.options.min;
        this.max = this.$input.attr('max') || this.options.max;

        this.initialValue = this.getValue() || this.options.initialValue || this.min;

        this.setValue(this.initialValue);
        this.checkState();

        this.$input.attr('pattern', '[0-9]*');

        // Bind events
        this.$input.on('keydown', this.onKeyDown.bind(this) );

        this.$input.on('change', this.onChange.bind(this) );

        this.$increaseButton.on('click', function (e) {
          e.preventDefault();
          _this.increase( $(this).data( _this.options.dataAttributeIncrease ) || 1 );
        });
        this.$decreaseButton.on('click', function (e) {
          e.preventDefault();
          _this.decrease( $(this).data('input-stepper-decrease') || 1 );
        });

        return this;
      },

      onChange: function (e) {
        if (this.getValue() === '') {
          this.setValue( this.initialValue );
        } else {
          this.setValue( this.getValue() );
        }

        return this;
      },

      onKeyDown: function (e) {
        // Inspired by:
        // http://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery

        // Allow: backspace, delete, tab, escape, enter and .
        var isEnterKey = e.keyCode == 13;

        if (isEnterKey) {
          this.setValue(this.getValue());
          return e.preventDefault();
        }

        var isSomeKeys = $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1;
        // Allow: Ctrl+A
        var isCntrlA = (e.keyCode == 65 && e.ctrlKey === true);
        // Allow: home, end, left, right
        var isHomeEndLeftRight = (e.keyCode >= 35 && e.keyCode <= 39);

        var isUpKey = e.keyCode == 38;
        var isDownKey = e.keyCode == 40;

        if (isUpKey) this.increase( (e.shiftKey ? 10 : 1) );
        if (isDownKey) this.decrease( (e.shiftKey ? 10 : 1) );

        if (isSomeKeys || isCntrlA || isHomeEndLeftRight) return;

        // Ensure that it is a number and stop the keypress
        if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
          // Numbers 0-9
          this.setValue(this.getValue());
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) ) {

          e.preventDefault();
        }

        return this;
      },

      getValue: function () {
        return this.$input.val();
      },

      setValue: function (amount) {
        amount = parseInt(amount, 10);

        if (this.amount === parseInt(amount, 10) ) return;

        if (amount !== '') {
          this.amount = parseInt(amount, 10);
        } else {
          this.amount = this.initialValue;
        }

        if (this.amount >= this.max) {
          this.amount = parseInt(this.max, 10);
        }

        if (this.amount <= this.min) {
          this.amount = parseInt(this.min, 10);
        }

        this.$input.val(this.amount).trigger('change');
        this.checkState();

        return this;
      },

      increase: function (amount) {
        if (this.$increaseButton.hasClass( this.options['classNameDisabled'] )) return;
        var newAmount = parseInt(this.amount + (amount || 1), 10);

        this.setValue(newAmount);
        this.$input.trigger('increase', [amount, this]);

        return this;
      },

      decrease: function (amount) {
        if (this.$decreaseButton.hasClass( this.options['classNameDisabled'] )) return;
        var newAmount = parseInt(this.amount - (amount || 1), 10);

        this.setValue(newAmount);
        this.$input.trigger('decrease', [amount, this]);

        return this;
      },

      disableButton: function ($button) {
        $button.addClass( this.options['classNameDisabled'] ).attr('disabled', true);
        return this;
      },

      enableButton: function ($button) {
        $button.removeClass( this.options['classNameDisabled'] ).attr('disabled', false);
        return this;
      },

      checkState: function () {
        if (this.amount <= this.min) {
          this.disableButton( this.$decreaseButton );
        } else {
          this.enableButton( this.$decreaseButton );
        }

        if (this.amount >= this.max) {
          this.disableButton( this.$increaseButton );
        } else {
          this.enableButton( this.$increaseButton );
        }

        return this;
      }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
      return this.each(function () {
        if ( ! $.data(this, "plugin-" + pluginName)) {
          $.data(this, "plugin-" + pluginName,
            new Plugin( this, options ));
          }
      });
    };

  })(window, jQuery);

  $('.input-stepper').inputStepper();

  $('.input-stepper-advanced').inputStepper({
      selectorButtonIncrease: '.increase',
      selectorButtonDecrease: '.decrease',
      dataAttributeIncrease: 'increase',
      dataAttributeDecrease: 'decrease'
  });

  $('#some-input').on('increase', function (e, amount) {
      alert('increase with: ' + amount);
  });
  $('#some-input').on('decrease', function (e, amount) {
      alert('decrease with: ' + amount);
  });
  /*
  /*
  =======================================================================
      NEWSLETTER
  =======================================================================
  */
    $(function () {
      'use strict';
        var $form = $('#mc-embedded-subscribe-form');

        $('#mc-embedded-subscribe').on('click', function(event) {
        if(event) event.preventDefault();
        register($form);
        });
      });

      function register($form) {
        $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType    : 'json',
        contentType: "application/json; charset=utf-8",
        error       : function(err) { $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>Could not connect to server. Please try again later.</div>'); },
        success     : function(data) {
         
          if (data.result != "success") {
          var message = data.msg;
          $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+message+'</div>');
          } 

          else {
          var message = data.msg;
          $('#notification_container').html('<div id="nl-alert-container"  class="alert alert-info alert-dismissible fade in bounceIn" role="alert" ><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+message+'</div>');
          }
        }
        });
    }
  /*
  =======================================================================
      Map Script
  =======================================================================
  */
    if($('#map-canvas').length){
      google.maps.event.addDomListener(window, 'load', initialize);
    }
});
/*
  =======================================================================
       Map Custom Style Script Script
  =======================================================================
*/
  function initialize() {
    "use strict";
    var MY_MAPTYPE_ID = 'custom_style';
    var map;
    var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
    var featureOpts = [
        {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 65
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": "50"
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "30"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": "40"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#ffff00"
                },
                {
                    "lightness": -25
                },
                {
                    "saturation": -97
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": -25
                },
                {
                    "saturation": -100
                }
            ]
        }
    ];
    var mapOptions = {
      zoom: 12,
      center: brooklyn,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      zoomControl: false,
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(
      document.getElementById('map-canvas'),
      mapOptions
    );

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  }
