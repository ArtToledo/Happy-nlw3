angular.module('happy').controller('orphanageDetailController', function ($scope, orphanage) {
  $scope.orphanage = orphanage.data;
  $scope.activeImageIndex = 0;

  var local_icons = {
    happy_icon: {
      iconUrl: 'assets/map-marker.svg',
      iconSize: [58, 68],
      iconAnchor: [29, 68],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76]
    },
  };

  angular.extend($scope, {
    center: {
      lat: $scope.orphanage.latitude,
      lng: $scope.orphanage.longitude,
      zoom: 16
    },
    marker: [
      {
        lat: $scope.orphanage.latitude,
        lng: $scope.orphanage.longitude,
        message: `${$scope.orphanage.name}`,
        focus: false,
        draggable: false,
        icon: local_icons.happy_icon,
      }
    ],
    defaults: {
      scrollWheelZoom: false,
    }
  });

  $scope.setActiveImageIndex = function (index) {
    $scope.activeImageIndex = index;
  };
});
