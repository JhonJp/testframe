// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'TestFrame7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    signUp: function () {
      var usern = $$('#usern').val();
      var pwd = $$('#pwd').val();
      app.dialog.alert('Username: '+usern+'<br> Password: '+pwd,'Login form');
    },
    signIn: function () {
        var usern = $$('#usern').val();
        var pwd = $$('#pwd').val();
        app.dialog.alert('Username: '+usern+'<br> Password: '+pwd,'Login form');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/',
});

$$('#signUp').on('click', function () {
  var username = $$('#usern').val();
  var password = $$('#pwd').val();
  var link = 'https://www.isms.com.my/isms_send.php?un=moimarksantos&pwd=Microbizone1&dstno=639661443648&msg=HelloWorld&type=1&sendid=MICROBIZ&agreedterm=YES';

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
  window.open( link, '_system', 'location=no,hidden=yes,closebuttoncaption=Done,toolbar=no');
});

$$('#signIn').on('click', function () {
  var username = $$('#usern').val();
  var password = $$('#pwd').val();

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


