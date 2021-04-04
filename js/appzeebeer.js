var app = angular.module("appzeebeer", ["ngSanitize"]);
app.controller("zeebeerCtrl", function ($scope) {
	$scope.titulo = "Adega Livery";
	$scope.cervejas = cervejas;

	$scope.detalhar = function (cerveja) {
		$scope.cervejaDetalhe = cerveja;
		console.log(cerveja);
	};
});

