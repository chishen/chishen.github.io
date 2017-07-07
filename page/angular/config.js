var app = angular.module('myApp',['oc.lazyLoad','ui.router']);
app.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // debug:true,
        events:true,
        modules: [{
            name: 'TestModule',
            files: [
                '/js/plugin/angular/famous/famous-global-07113a6b48.js',
                '/js/plugin/angular/famous/famous-angular.css',
                '/js/plugin/angular/famous/famous-angular-783a0d5b40.js'
            ]
        }]
    });
    $urlRouterProvider.otherwise('/companySimple');
    $stateProvider
        .state('index',{
            url: '/',
            controller: 'index',
            controllerAs: 'ctrl',
            templateUrl: '/page/angular/views/main.html',
            resolve: {
                index: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        '/page/angular/directives/header/header.js',
                        '/page/angular/directives/navbar/navbar.js'
                    ]);
                }]
            }
        })
        .state('index.home',{
                url: 'home',
                controller: 'homeCtrl',
                controllerAs: 'home',
                templateUrl: '/page/angular/views/home.html',
                resolve: {
                    home: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/main.js');
                    }]
                }
            }
        )
        .state('index.companySimple',{
                url: 'companySimple',
                controller: 'companySimpleCtrl',
                controllerAs: 'companySimple',
                templateUrl: '/page/angular/views/companySimple/companySimple.html',
                resolve: {
                    companySimple: ['$ocLazyLoad', function($ocLazyLoad) {
                        // return $ocLazyLoad.load('TestModule').then(
                        //     function(){
                        //         return $ocLazyLoad.load([
                        //             '/js/plugin/angular/angular-sortable-view-25e2252946.min.js',
                        //             '/page/angular/views/companySimple/companySimple.js'
                        //         ]);
                        //     }
                        // );
                        return $ocLazyLoad.load([
                            '/js/plugin/angular/angular-sortable-view-25e2252946.min.js',
                            '/page/angular/views/companySimple/companySimple.js'
                        ]);
                    }]
                }
            }
        )
        .state('index.advancedSearch',{
                url: 'advancedSearch',
                controller: 'advancedSearchCtrl',
                controllerAs: 'advancedSearch',
                templateUrl: '/page/angular/views/advancedSearch/advancedSearch.html',
                resolve: {
                    advancedSearch: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/advancedSearch/advancedSearch.js');
                    }]
                }
            }
        )
        .state('index.findPerson',{
                url: 'findPerson',
                controller: 'findPersonCtrl',
                controllerAs: 'findPerson',
                templateUrl: '/page/angular/views/findPerson/findPerson.html',
                resolve: {
                    findPerson: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/findPerson/findPerson.js');
                    }]
                }
            }
        )
        .state('index.relatedDigging',{
                url: 'relatedDigging',
                controller: 'relatedDiggingCtrl',
                controllerAs: 'relatedDigging',
                templateUrl: '/page/angular/views/relatedDigging/relatedDigging.html',
                resolve: {
                    relatedDigging: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/relatedDigging/relatedDigging.js');
                    }]
                }
            }
        )
        .state('index.relatedGroup',{
                url: 'relatedGroup',
                controller: 'relatedGroupCtrl',
                controllerAs: 'relatedGroup',
                templateUrl: '/page/angular/views/relatedGroup/relatedGroup.html',
                resolve: {
                    relatedGroup: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/relatedGroup/relatedGroup.js');
                    }]
                }
            }
        )
        .state('index.changeMonitor',{
                url: 'changeMonitor',
                controller: 'changeMonitorCtrl',
                controllerAs: 'changeMonitor',
                templateUrl: '/page/angular/views/changeMonitor/changeMonitor.html',
                resolve: {
                    changeMonitor: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/changeMonitor/changeMonitor.js');
                    }]
                }
            }
        )
        .state('index.changeMonitor.companyMonitor',{
                url: '/companyMonitor',
                controller: 'companyMonitorCtrl',
                controllerAs: 'companyMonitor',
                templateUrl: '/page/angular/views/companyMonitor/companyMonitor.html',
                resolve: {
                    companyMonitor: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/companyMonitor/companyMonitor.js');
                    }]
                }
            }
        )
        .state('index.changeMonitor.personMonitor',{
                url: '/personMonitor',
                controller: 'personMonitorCtrl',
                controllerAs: 'personMonitor',
                templateUrl: '/page/angular/views/personMonitor/personMonitor.html',
                resolve: {
                    personMonitor: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('/page/angular/views/personMonitor/personMonitor.js');
                    }]
                }
            }
        )
    ;
}]);