angular.module('myApp')
    .controller('companySimpleCtrl',function () {
        this.name = '简查企业';
        this.modelArray = ["1.1", "1.0", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10"];

        //
        // var Transitionable = $famous['famous/transitions/Transitionable'];
        // var Easing = $famous['famous/transitions/Easing'];
        //
        // this.boxTransitionable = new Transitionable([0, 0, 0]);
        //
        // this.animate = function() {
        //     this.boxTransitionable.set([200, 300, 0], {duration: 2000, curve: Easing.inOutBack});
        // };
    });
