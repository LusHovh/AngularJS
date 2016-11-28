angular.module('myApp').controller('postsController',
    ['$scope', '$http', '$state','$location', '$rootScope', function($scope, $http, $state, $location, $rootScope) {
			
    if($state.current.name == 'posts')
    {
        $http.get('/api/posts').then(function(response){
	  $scope.posts = response.data.posts;    	
	})  
    }

   

   
    else if($state.current.name == 'posts_create')
    {
        
        $scope.uploadPic = function(file)
        {
        
            if(file)
            {
                file.upload = Upload.upload({
                    url: '/api/posts',
                    data: {title: $scope.title, image: file,content: $scope.content},
                });

                file.upload.then(function (response) 
                {
                    $state.go('posts');
                });

            }
            
        }
       
    }



}]);
