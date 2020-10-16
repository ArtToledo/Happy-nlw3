angular.module('happy').controller('orphanageCreateController', function ($scope, $location, orphanagesAPI) {
  $scope.images = [];
  $scope.previewImages = [];

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
      lat: -19.947288,
      lng: -44.0703077,
      zoom: 16
    },
    marker: [
      {
        lat: -19.947288,
        lng: -44.0703077,
        focus: false,
        draggable: true,
        icon: local_icons.happy_icon,
      }
    ],
    defaults: {
      scrollWheelZoom: false,
    }
  });

  $scope.handleSelectImages = function (element) {
    $scope.images = Array.from(element.files);

    const selectedImagesPreview = $scope.images.map(image => {
      return URL.createObjectURL(image);
    });

    $scope.previewImages = selectedImagesPreview;

    $scope.$digest();
  }

  $scope.createOrphanage = function (orphanage) {
    const data = new FormData();

    data.append('name', orphanage.name);
    data.append('about', orphanage.about);
    data.append('latitude', String($scope.marker[0].lat));
    data.append('longitude', String($scope.marker[0].lng));
    data.append('instructions', orphanage.instructions);
    data.append('opening_hours', orphanage.opening_hours);
    data.append('open_on_weekends', String(orphanage.open_on_weekends));
    
    $scope.images.forEach(image => {
      data.append('images', image);
    });

    orphanagesAPI.saveOrphanage(data).then(function (response) {
      delete $scope.orphanage;
      $scope.orphanageForm.$setPristine();
      $location.path['/home'];
    }).catch(err => {
      alert('Erro ao cadastrar o orfanato, verifique todos os campos e tente novamente!')
    });
  };
});
