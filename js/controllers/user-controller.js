//Controller para adicionar usuário
angular.module('cinqapp').controller("UserController", function ($scope, $http) {
    $scope.user = {};
    $scope.adicionar = function () {
        console.log($scope.user);

        //aqui poderia adicionar os valores na Base de Dados
        //Como nao estamos utilizando BD...
        //Adicionando novos usuarios com JS:
        var usuarioTr = document.createElement("tr");

        var nomeTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var estadoTd = document.createElement("td");
        var acoesTd = document.createElement("td");

        nomeTd.innerHTML = $scope.user.nome;
        emailTd.innerHTML = $scope.user.email;
        estadoTd.innerHTML = $scope.user.estado;
        acoesTd.innerHTML = `<a class="btn btn-primary btn-xs" data-toggle="modal" data-target="#modalAlterarId{{user.id}}"><i class="glyphicon glyphicon-edit"></i> Editar</a> <a class="btn btn-danger btn-xs" onclick="deleteRow(this)"><i class="glyphicon glyphicon-trash"></i> Excluir</a>`;

        usuarioTr.appendChild(nomeTd);
        usuarioTr.appendChild(emailTd);
        usuarioTr.appendChild(estadoTd);
        usuarioTr.appendChild(acoesTd);

        var tabela = document.querySelector("#usuarios-lista");
        tabela.appendChild(usuarioTr);
    };

});