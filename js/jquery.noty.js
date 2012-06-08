/**
* noty - jQuery Notification Plugin v1.2.1
* Contributors: https://github.com/needim/noty/graphs/contributors
*
* Examples and Documentation - http://needim.github.com/noty/
*
* Licensed under the MIT licenses:
* http://www.opensource.org/licenses/mit-license.php
*
**/
(function($){
  $.noty = function(options, customContainer){
    var base = {};
    var $noty = null;
    var isCustom = false;

    base.init = function(options){
      base.options = $.extend({}, $.noty.defaultOptions, options);
      base.options.type = base.options.cssPrefix + base.options.type;
      base.options.id = base.options.type +'-'+ new Date().getTime();
      base.options.layout = base.options.cssPrefix +'layout-'+ base.options.layout;

      if (base.options.custom.container) customContainer = base.options.custom.container;
      (isCustom = ($.type(customContainer) === 'object') ? true : false);

      return base.addQueue();
    };

    // Push notification to queue
    base.addQueue = function(){
      var isGrowl = ($.inArray(base.options.layout, $.noty.growls) == -1) ? false : true;

      if (!isGrowl)
      {
        ((base.options.force) ? $.noty.queue.unshift({options: base.options}) : $.noty.queue.push({options: base.options}));
      }

      return base.render(isGrowl);
    };

    // Render the noty
    base.render = function(isGrowl)
    {
      var $_tpl = base.options.template;
      if(typeof $_tpl == 'undefined') $_tpl = '';

      // Layout spesific container settings
      var container = (isCustom) ? customContainer.addClass(base.options.theme +' '+ base.options.layout +' '+ base.options.cssPrefix +'custom-container') : $('body');

      if (isGrowl)
      {
        if ($('ul.'+ base.options.cssPrefix +'cont.'+ base.options.layout).length == 0) container.prepend(
          $('<ul/>').addClass(base.options.cssPrefix +'cont ' + base.options.layout)
        );

        container = $('ul.'+ base.options.cssPrefix +'cont.'+ base.options.layout);
      }
      else
      {
        if ($.noty.available)
        {
          var fromQueue = $.noty.queue.shift();

          if ($.type(fromQueue) === 'object')
          {
            $.noty.available = false;
            base.options = fromQueue.options;
          }
          else
          {
            $.noty.available = true;

            return base.options.id;
          }
        }
        else
        {
          return base.options.id;
        }
      }

      base.container = container;

      // Generating noty bar
      base.bar = $('<div class="'+ base.options.cssPrefix +'bar" />')
        .attr('id', base.options.id)
        .addClass(base.options.theme +' '+ base.options.layout +' '+ base.options.type);

      $noty = base.bar;
      $noty
        .append($_tpl)
        .find('.'+ base.options.cssPrefix +'text')
        .html(base.options.text);

      $noty.data('noty-options', base.options);

      // Close button display
      ((base.options.closeButton) ? $noty.addClass(base.options.cssPrefix +'closable').find('.close').show() : $noty.find('.close').remove());

      // Bind close event to button
      $noty.find('.close').bind('click', function(){
        $noty.trigger('noty.close');
      });

      // If we have a button we must disable closeOnSelfClick and closeOnSelfOver option
      if (base.options.buttons) base.options.closeOnSelfClick = base.options.closeOnSelfOver = false;

      // Close on self click
      if (base.options.closeOnSelfClick)
      {
        $noty.bind('click', function(){
          $noty.trigger('noty.close');
        }).css('cursor', 'pointer');
      }

      // Close on self mouseover
      if (base.options.closeOnSelfOver)
      {
        $noty.bind('mouseover', function(){
          $noty.trigger('noty.close');
        }).css('cursor', 'pointer');
      }

      // Set buttons if available
      if (base.options.buttons)
      {
        $buttons = $('<div/>').addClass(base.options.cssPrefix +'buttons');
        $noty.find('.'+ base.options.cssPrefix +'message').append($buttons);
        $.each(base.options.buttons, function(i, button){
          bclass = (button.type) ? button.type : 'gray';
          $button = $('<button/>')
            .addClass(bclass)
            .html(button.text)
            .appendTo($noty.find('.'+ base.options.cssPrefix +'buttons'))
            .bind('click', function(){
              if ($.isFunction(button.click))
              {
                button.click.call($button, $noty);
              }
            });
        });
      }

      return base.show(isGrowl);
    };

    base.show = function(isGrowl)
    {
      // is Modal?
      if (base.options.modal)
      {
        $('<div/>')
          .addClass(base.options.cssPrefix +'modal')
          .addClass(base.options.theme)
          .prependTo($('body'))
          .fadeIn('fast');
      }

      $noty.close = function(){
        return this.trigger('noty.close');
      };

      // Prepend noty to container
      ((isGrowl) ? base.container.prepend($('<li/>').append($noty)) : base.container.prepend($noty));

      // topCenter and center specific options
      if (base.options.layout == base.options.cssPrefix +'layout-top-center' || base.options.layout == base.options.cssPrefix +'layout-center')
      {
        $.noty.reCenter($noty);
      }

      $noty.bind('noty.setText', function(event, text){
        $noty.find('.'+ base.options.cssPrefix +'text').html(text);

        if (base.options.layout == base.options.cssPrefix +'layout-top-center' || base.options.layout == base.options.cssPrefix +'layout-center')
        {
          $.noty.reCenter($noty);
        }
      });

      $noty.bind('noty.setType', function(event, type){
        $noty.removeClass($noty.data('noty-options').type);
        type = $noty.data('noty-options').cssPrefix+type;
        $noty.data('noty-options').type = type;
        $noty.addClass(type);

        if (base.options.layout == base.options.cssPrefix +'layout-top-center' || base.options.layout == base.options.cssPrefix +'layout-center')
        {
          $.noty.reCenter($noty);
        }
      });

      $noty.bind('noty.getId', function(event){
        return $noty.data('noty-options').id;
      });

      // Bind close event
      $noty.one('noty.close', function(event){
        var options = $noty.data('noty-options');
        if(options.onClose) options.onClose();

        // Modal Cleaning
        if (options.modal) $('.'+ base.options.cssPrefix +'modal').fadeOut('fast', function(){
          $(this).remove();
        });

        $noty
          .clearQueue()
          .stop()
          .animate($noty.data('noty-options').animateClose, $noty.data('noty-options').speed, $noty.data('noty-options').easing, $noty.data('noty-options').onClosed)
          .promise()
          .done(function(){
            if ($.inArray($noty.data('noty-options').layout, $.noty.growls) > -1)
            {
              $noty.parent().remove();
            }
            else
            {
              $noty.remove();

              $.noty.available = true;
              base.render(false);
            }
        });
      });

      // Start the show
      if(base.options.onShow) base.options.onShow();
      $noty.animate(base.options.animateOpen, base.options.speed, base.options.easing, base.options.onShown);

      // If noty is have a timeout option
      if (base.options.timeout) $noty.delay(base.options.timeout).promise().done(function(){
        $noty.trigger('noty.close');
      });

      return base.options.id;
    };

    // Run initializer
    return base.init(options);
  };

  // API
  $.noty.get = function(id){
    return $('#'+ id);
  };

  $.noty.close = function(id){
    //remove from queue if not already visible
    for(var i = 0; i < $.noty.queue.length;)
    {
      if($.noty.queue[i].options.id == id) $.noty.queue.splice(id, 1);
      else i++;
    }

    $.noty.get(id).trigger('noty.close');
  };

  $.noty.setText = function(id, text){
    $.noty.get(id).trigger('noty.setText', text);
  };

  $.noty.setType = function(id, type){
    $.noty.get(id).trigger('noty.setType', type);
  };

  $.noty.closeAll = function(){
    $.noty.clearQueue();
    $('.'+ base.options.cssPrefix +'bar').trigger('noty.close');
  };

  $.noty.reCenter = function(noty){
    noty.css({'left': ($(window).width() - noty.outerWidth()) / 2 + 'px'});
  };

  $.noty.clearQueue = function(){
    $.noty.queue = [];
  };

  var windowAlert = window.alert;

  $.noty.consumeAlert = function(options){
    window.alert = function(text){
      if(options) options.text = text;
      else options = {text: text};
      $.noty(options);
    };
  }

  $.noty.stopConsumeAlert = function(){
    window.alert = windowAlert;
  }

  var _default_prefix = 'noty-';

  $.noty.queue = [];
  $.noty.growls = [_default_prefix +'layout-top-left', _default_prefix +'layout-top-right', _default_prefix +'layout-bottom-left', _default_prefix +'layout-bottom-right'];
  $.noty.available = true;
  $.noty.defaultOptions = {
    layout: 'bottom-right',
    theme: '',
    animateOpen: {height: 'toggle'},
    animateClose: {height: 'toggle'},
    easing: 'swing',
    text: '',
    type: 'error',
    speed: 500,
    timeout: 5000,
    closeButton: false,
    closeOnSelfClick: true,
    closeOnSelfOver: false,
    force: false,
    onShow: false,
    onShown: false,
    onClose: false,
    onClosed: false,
    buttons: false,
    modal: false,
    template: '<div class="'+ _default_prefix +'message"><span class="'+ _default_prefix +'text"></span><a class="close"></a></div>',
    cssPrefix: _default_prefix,
    custom: {
      container: null
    }
  };

  $.fn.noty = function(options_or_text){
    var options = notyPrepareOptions(arguments);

    return this.each(function(){
      (new $.noty(options, $(this)));
    });
  };
})(jQuery);

//Helper
function noty(options_or_text)
{
  var options = notyPrepareOptions(arguments);

  return jQuery.noty(options); // returns an id
}

function notyPrepareOptions(arg__options_or_text)
{
  var options = {};
  var text = '';
  var type = '';
  var _avail_types = [
    "info",
    "information",
    "error",
    "success",
    "alert",
    "warning",
    "notification",
    "note",
    "debug"
  ];

  if(arg__options_or_text.length > 1)
  {
    text = arg__options_or_text[0];
    type = arg__options_or_text[1];

    if($.inArray(type, _avail_types) == -1) type = 'info';

    options = {
      "text": text,
      "type": type
    };
  }
  else
  {
    if(typeof arg__options_or_text == 'object') options = arg__options_or_text[0];
    else if(typeof arg__options_or_text == 'string') options = {
      "text": arg__options_or_text[0]
    };
  }

  return options;
}