'use strict';

angular.module('myApp.view2', ['ngRoute'])

.controller('View2Ctrl', function($scope, $http) {
	$scope.activeIndex = -1	;
	var url = 'view2/videolist.json';
        $http({
            method: 'GET',
            url: url
        }).then( function(response) {
        	console.log(response);
        	$scope.videolist = response.data;
        });
   
    $scope.playallBtn = function(){
    	$scope.activeVideoSrc = 0;
    	var vid = document.getElementById('videoScreen');
    	vid.src = $scope.videolist[$scope.activeVideoSrc].video_url;
    	console.log(vid);
		  // console.log(videoSrc[activeVideoSrc]);
    	vid.play();
    	// console.log($scope.videolist);
    	// for(var i=0; i<$scope.videolist.length; i++){
    	// 	var itemUrl = $scope.videolist[i].video_url;
    	// 	videoSrc.push(itemUrl);
    	// }
    	// console.log(videoSrc);
		vid.addEventListener('ended', function(e) {
		  $scope.activeVideoSrc++ ;
		  if($scope.videolist[$scope.activeVideoSrc] == undefined){
		  	alert("You have watched the entire library");
		  	return;
		  }else{
		  	vid.src = $scope.videolist[$scope.activeVideoSrc].video_url;
		  }
		  console.log(vid.src);
		  
		  // console.log(videoSrc[activeVideoSrc]);
		  vid.play();
		  $scope.videolist[$scope.activeVideoSrc-1].count++;
		  $scope.$apply();
		});
    }
});