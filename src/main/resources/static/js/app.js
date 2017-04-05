var netqApp = angular.module("netqApp", ['ngRoute']);

netqApp.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/", {
			templateUrl: 'view/detalhe-professor.html',
			controller: 'loginController'
		})
		.when("/cliente/novo", {
			templateUrl: 'view/detalhe-cliente.html',
			controller: 'clienteController'
		})
		.when("/cliente/editar/:codigoCliente", {
			templateUrl: 'view/detalhe-cliente.html',
			controller: 'clienteController'
		})
		.when("/cliente", {
			templateUrl: 'view/lista-clientes.html',
			controller: 'clienteController'
		})
		.when("/fornecedor", {
			templateUrl: 'view/fornecedor.html',
			controller: 'fornecedorController'
		})
		.when("/estoque", {
			templateUrl: 'view/estoque.html',
			controller: 'estoqueController'
		})
		.otherwise({
			redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
});





