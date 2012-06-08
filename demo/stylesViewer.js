$(document).ready(function(){
  noty({layout: 'top-left', theme: 'noty-theme-default', type: 'notification', text: 'notification with default theme', timeout: false});
  noty({layout: 'top-left', theme: 'noty-theme-default', type: 'warning',      text: 'warning with default theme',      timeout: false});
  noty({layout: 'top-left', theme: 'noty-theme-default', type: 'alert',        text: 'alert with default theme',        timeout: false});
  noty({layout: 'top-left', theme: 'noty-theme-default', type: 'information',  text: 'information with default theme',  timeout: false});
  noty({layout: 'top-left', theme: 'noty-theme-default', type: 'success',      text: 'success with default theme',      timeout: false});
  noty({layout: 'top-left', theme: 'noty-theme-default', type: 'error',        text: 'error with default theme',        timeout: false});

  noty({layout: 'top-left', theme: '', type: 'notification', text: 'notification with twitter theme', timeout: false});
  noty({layout: 'top-left', theme: '', type: 'warning',      text: 'warning with twitter theme',      timeout: false});
  noty({layout: 'top-left', theme: '', type: 'alert',        text: 'alert with twitter theme',        timeout: false});
  noty({layout: 'top-left', theme: '', type: 'information',  text: 'information with twitter theme',  timeout: false});
  noty({layout: 'top-left', theme: '', type: 'success',      text: 'success with twitter theme',      timeout: false});
  noty({layout: 'top-left', theme: '', type: 'error',        text: 'error with twitter theme',        timeout: false});

  noty({layout: 'bottom-left', theme: 'noty-theme-facebook', type: 'notification', text: 'notification with facebook theme', timeout: false});
  noty({layout: 'bottom-left', theme: 'noty-theme-facebook', type: 'warning',      text: 'warning with facebook theme',      timeout: false});
  noty({layout: 'bottom-left', theme: 'noty-theme-facebook', type: 'alert',        text: 'alert with facebook theme',        timeout: false});
  noty({layout: 'bottom-left', theme: 'noty-theme-facebook', type: 'information',  text: 'information with facebook theme',  timeout: false});
  noty({layout: 'bottom-left', theme: 'noty-theme-facebook', type: 'success',      text: 'success with facebook theme',      timeout: false});
  noty({layout: 'bottom-left', theme: 'noty-theme-facebook', type: 'error',        text: 'error with facebook theme',        timeout: false});

  var content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#" style="color: #ccc;">magnis dis parturient</a> montes, nascetur ridiculus mus.';
  var title = '<div class="header">This is a sticky notice!</div>';
  var icon = '<div class="icon"><img src="http://s3.amazonaws.com/twitter_production/profile_images/132499022/myface_bigger.jpg"></div>';

  noty({layout: 'bottom-right', theme: 'noty-theme-growl', type: 'error', text: content, closeButton: true, timeout: false});
  noty({layout: 'bottom-right', theme: 'noty-theme-growl', type: 'error', text: title + content, timeout: false});
  noty({layout: 'bottom-right', theme: 'noty-theme-growl', type: 'error', text: icon +'<div style="margin-left: 58px;">'+ title + content +'</div>', timeout: false});
});