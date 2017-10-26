angular.module('cinqapp').controller("UsersController", function ($scope, $http) {

    $scope.users = [];
    $scope.filtro = '';


    /* nao deu certo
    $http.get('js/users.json').success(function (users) {
        $scope.users = users;
    }).error(function (erro) {
        console.log(erro);
    });*/
    

    
    var promisse = $http.get('js/users.json');
    promisse.then(function (retorno) {
        $scope.users = retorno.data;
    }).catch(function (error) {
        console.log(error);
    });
    
    
});