angular.module("myApp").config(function($stateProvider, $urlRouterProvider) {
   
	$stateProvider
	
	.state('posts', {
	    url: "/posts",
	    templateUrl: "views/posts.html",
	    controller: "postsController"
	})
	
	
	.state('posts_create', {
	    url: "/posts/create",
	    templateUrl: "views/create.html",
	 	controller: "postsController"
	})
	
	
	.state('login',{
		url: '/login',
		templateUrl: 'views/login.html',
		controller: 'loginController'
	})
	.state('register',{
		url: '/register',
		
		templateUrl: 'views/register.html',
		 controller: 'registerController'
	})
  	$urlRouterProvider.otherwise("/");
});