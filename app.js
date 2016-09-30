angular.module('rzpackage', [])
	.directive('rzflipover',function(){
            return {
                restrict: 'E',
                templateUrl : '/templates/rzflipover.html',
                scope: {
                    obj: "=",
                    name: "@",
                    desc: "@",
                    panelClass: "@",
                    frontImage: "@",
                }
            }
        })
	.directive("rzInput",function(){
              return {
                restrict: "E",
                templateUrl : "/templates/rzinput.html",
                scope: {
                    type: "@",
                    float: "@",
                    label: "@",
                    name: "@",
                    id: "@",
                    error: "=",
                    maxLimit: "=",
                    directive: "@",
                    ngRequired: "@",
                    ngModel: "=",
                    list: "@",
                    block: "@",
                    addOn: "@",
                    addName: "@",
                    addFunc: "="
                },
              }
    })
    .directive("rzSearch",function(){
              return {
                restrict: "E",
                templateUrl : "/templates/rzsearch.html",
                scope: {
                    type: "@",
                    float: "@",
                    label: "@",
                    name: "@",
                    id: "@",
                    error: "=",
                    form: "@",
                    ngRequired: "@",
                    ngModel: "=",
                    list: "@",
                    search: "=",
                    addName: "@",
                    clickfunc: "="
                },
                controller: function($scope){
                    $scope.add = function (item){
                        $scope.clickfunc(item);
                        $scope.selected = true;

                    };
                },
            }
    })
 .directive("rzTextarea",function(){
              return {
                restrict: "E",
                templateUrl : "/templates/rztextarea.html",
                scope: {
                    maxlength: "@",
                    rows: '@',
                    label: "@",
                    name: "@",
                    id: "@",
                    error: "=",
                    ngRequired: "@",
                    ngModel: "=",
                },
              }
    })
 .directive("rzSelect",function(){
              return {
                restrict: "E",
                templateUrl : "/templates/rzselect.html",
                scope: {
                    label: "@",
                    name: "@",
                    id: "@",
                    error: "=",
                    ngRequired: "@",
                    options: "=",
                    ngModel: "=",
                    filterr: "=",
                    
                },
              }
    })