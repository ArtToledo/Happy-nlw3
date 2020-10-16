angular.module('happy').config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/app', {
    templateUrl: './view/app.html',
  });

  $routeProvider.when('/home', {
    templateUrl: './view/home.html',
    controller: 'homeController',
    resolve: {
      orphanages: function (orphanagesAPI) {
        return orphanagesAPI.getOrphanages();
      },
    }
  });

  $routeProvider.when('/orphanage/:id', {
    templateUrl: './view/orphanageDetail.html',
    controller: 'orphanageDetailController',
    resolve: {
      orphanage: function (orphanagesAPI, $route) {
        return orphanagesAPI.getOrphanage($route.current.params.id);
      },
    }
  });

  $routeProvider.when('/orphanages/create', {
    templateUrl: './view/orphanageCreate.html',
  });
  
  $routeProvider.otherwise({ redirectTo: '/app' });
});
