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
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/',
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);

});

/*=== Popup images ===*/
var photoBrowse = app.photoBrowser.create({
  photos : [
    {
      url: 'img/gpxteam/01.jpg',
      caption: 'GP EXPRESS TEAM'
    },
    {
      url: 'img/gpxteam/02.jpg',
      caption: 'THE ORIGINAL BANNER OF GP EXPRESS'
    },
    {
      url: 'img/gpxteam/03.jpg',
      caption: 'GP EXPRESS CARGO VAN'
    },
    {
      url: 'img/gpxteam/04.jpg',
      caption: 'GP EXPRESS CARGO VAN AND PERSONNEL'
    },
    {
      url: 'img/gpxteam/05.jpg',
      caption: 'GP EXPRESS CARGO VAN AND PERSONNEL'
    },
    {
      url: 'img/gpxteam/06.jpg',
      caption: 'THE TEAM WITH A PACKAGE THAT HAS BEEN TAKEN CARE OF'
    },
  ],
  type: 'page',
  backLinkText: 'Back'
});

$$('#clickImage').on('click', function () {
  console.log('value changed');
  // mainView.photoBrowse.open();
  
});