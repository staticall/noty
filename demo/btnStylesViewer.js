$(document).ready(function(){
  notyAlertWithButtons('top-left', 'noty-theme-default');
  notyAlertWithButtons('top-left', '');
  notyAlertWithButtons('bottom-left', 'noty-theme-facebook');
  notyAlertWithButtons('bottom-right', 'noty-theme-growl');
});

function notyAlertWithButtons(layout, theme){
  noty({layout : layout, theme : theme, type : 'notification', text: 'alert with buttons',
    buttons: [
      {type: 'btn btn-primary', text: 'Ok', click: function($noty) {
          $noty.close();
          noty({force: true, layout : layout, theme : theme, text: 'You clicked "Ok" button', type: 'success'});
        }
      },
      {type: 'btn btn-danger', text: 'Cancel', click: function($noty) {
          $noty.close();
          noty({force: true, layout : layout, theme : theme, text: 'You clicked "Cancel" button', type: 'error'});
        }
      }
    ], closable: false, timeout: false
  });
}