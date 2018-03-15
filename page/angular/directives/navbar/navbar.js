angular.module('myApp')
    .directive('navbar',function(){
        return {
            restrict: 'E',
            controllerAs: 'navbar',
            templateUrl:'/page/angular/directives/navbar/navbar.html',
            controller: function () {
                this.navbarDatas = [{
                    'name': '简查企业',
                    'url': 'index.companySimple',
                    'logo': 'glyphicon-stats'
                },{
                    'name': '高级搜索',
                    'url': 'index.advancedSearch',
                    'logo': 'glyphicon-stats'
                },{
                    'name': '精确找人',
                    'url': 'index.findPerson',
                    'logo': 'glyphicon-stats'
                },{
                    'name': '关联挖掘',
                    'url': 'index.relatedDigging',
                    'logo': 'glyphicon-stats'
                },{
                    'name': '关联群组',
                    'url': 'index.relatedGroup',
                    'logo': 'glyphicon-stats'
                },{
                    'name': '变更监控',
                    'url': 'index.changeMonitor.companyMonitor',
                    'logo': 'glyphicon-stats'
                }];







                // this.age = '18';
                // this.click = function () {
                //     console.log(123);
                // }


                // $('.navbarLi').on('click',function () {
                //     if($(this).hasClass('navbarActive')){
                //         $(this).removeClass('navbarActive');
                //     }else{
                //         $(this).addClass('navbarActive');
                //     }
                //     navbarActive();
                // });
                // navbarActive();
                // function navbarActive() {
                //     $('.navbarLi').next().hide().prev()
                //         .find(':last-child.glyphicon-menu-down').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-right');
                //     $('.navbarLi.navbarActive').next().show().prev()
                //         .find(':last-child.glyphicon-menu-right').removeClass('glyphicon-menu-right').addClass('glyphicon-menu-down');
                // }
            }
        }
    })
;
