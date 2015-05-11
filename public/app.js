var app = angular.module('Homeworks', []);

app.factory('HomeworkFactory', function($http) {
    return [{
        assignment: 'Test First JavaScript',
        url: 'https://github.com/larissapassos/FullstackTestFirst',
        status: 'completed'
    },
    {
        assignment: 'Angular Day 1',
        url: 'https://github.com/larissapassos/flashcards-day1',
        status: 'completed'
    },
    {
        assignment: 'Angular Day 2',
        url: 'https://github.com/larissapassos/flash-cards',
        status: 'completed'
    }
    ];
});

app.controller('MainController', function($scope, HomeworkFactory) {
	$scope.homeworks = HomeworkFactory;
    
    $scope.showInfo = function(homework) {
        if (homework.shinfo) {
            homework.shinfo = false;
        }
        else {
            homework.shinfo = true;
        }
    }
});