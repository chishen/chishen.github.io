angular.module('myApp')
    .controller('index',function () {
        this.name = 'cs';
        this.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    })
    .directive('header',function(){
        return {
            restrict: 'E',
            controllerAs: 'header',
            scope: {
                title: '@'
            },
            transclude: true,
            templateUrl:'/page/angular/directives/header/header.html',
            // link: function (scope,element,attrs) {
            //     console.log(scope);
            //     console.log(element);
            //     console.log(attrs);
            // },
            controller: function () {
                this.age = '18';
                this.click = function () {
                    console.log(123);
                }
            }
        }
    })
    ;
