angular.module('happy').controller('homeController', function ($scope, orphanages) {
  var local_icons = {
    happy_icon: {
      iconUrl: 'assets/map-marker.svg',
      iconSize: [58, 68],
      iconAnchor: [29, 68],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    },
  };
  
  $scope.orphanages = orphanages.data.map(orphanage => {
    return {
      id: orphanage.id,
      lat: orphanage.latitude,
      lng: orphanage.longitude,
      message: `${orphanage.name} <a style="margin: 0 10px;" href="#/orphanage/${orphanage.id}"><ng-md-icon icon="arrow_forward" style="fill: #fff" size="20"></ng-md-icon></a>`,
      focus: false,
      draggable: false,
      icon: local_icons.happy_icon,
    }
  });

  angular.extend($scope, {
    center: {
      lat: -19.9472684,
      lng: -44.0703649,
      zoom: 16
    },
    markers: $scope.orphanages,
    defaults: {
      scrollWheelZoom: false,
    }
  });
});
