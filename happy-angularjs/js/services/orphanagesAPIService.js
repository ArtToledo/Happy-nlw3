angular.module('happy').factory('orphanagesAPI', function ($http, config) {
  var _getOrphanages = () => {
    return $http.get(config.baseURL + '/orphanages');
  };

  var _getOrphanage = (id) => {
    return $http.get(config.baseURL + '/orphanages/' + id);
  };

  var _saveOrphanage = (orphanage) => {
    const uploadUrl = config.baseURL + '/orphanages';

    return $http({
      url: uploadUrl,
      method: 'POST',
      data: orphanage,
      headers: { 'Content-Type': undefined},
      transformRequest: angular.identity
  });
  };
  
  return {
    getOrphanages: _getOrphanages,
    getOrphanage: _getOrphanage,
    saveOrphanage: _saveOrphanage,
  };
});
