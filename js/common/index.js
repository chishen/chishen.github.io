$(function () {
    //侧导航栏点击事件
    $('#bars').click(function () {
        $(this).toggleClass('bars-rotate');
        $('.navbar').toggleClass('navbar-width');
    });
    //侧导航栏悬浮事件
    $('#bars').hover(function() {
        $(this).find('.line').css('background','#4169E1');
    }, function() {
        $(this).find('.line').css('background','#fff');
    });
    //头像悬浮事件
    $('#touxiang,#touxiang-shadow').hover(function() {
        $('#touxiang-shadow').show();
    }, function() {
        $('#touxiang-shadow').hide();
    });
    //头像点击事件
    var audio = document.getElementById('audio');
    $('#touxiang-shadow').click(function () {
        if($('#touxiang-shadow span').hasClass('glyphicon-play')){
            $(this).find('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
            $('#touxiang').addClass('change');
            audio.play();
        }else{
            $(this).find('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
            $('#touxiang').removeClass('change');
            audio.pause();
        }
    });
    //点击继续按钮事件
    $('.background').find('.continue a').click(function () {
        scrollHeight();
    });

});
//页面滚动事件
function scrollHeight() {
    var height1 = $('.backgroundImg').height();
    var heightScroll = height1 - $(window).scrollTop();
    var spend;
    if (Math.floor(heightScroll / 10) > 1) {
        spend = Math.floor(heightScroll / 10);
    } else {
        spend = 1;
    }
    var x = $(window).scrollTop();
    // console.log($(window).scrollTop());
    if (heightScroll > 0) {
        $(window).scrollTop($(window).scrollTop() + spend);
        if($(window).scrollTop() !== x){
            setTimeout('scrollHeight()', 10);
        }
    } else {
        $(window).scrollTop(height1);
    }
}
/************************滚屏****************/
// init controller
var controller = new ScrollMagic.Controller();

// create a scene
var scene = new ScrollMagic.Scene({
    duration: 100,  // the scene should last for a scroll distance of 100px
    offset:50      // start this scene after scrolling for 50px
}).setPin(".continue"); // pins the element for the the scene's duration
  // .addTo(controller); // assign the scene to the controller
scene.on('add', function (event) {
    console.log('add');
});
scene.on('change', function (event) {
    console.log('change');
});
scene.on('destroy', function (event) {
    console.log('destroy');
});
scene.on('remove', function (event) {
    console.log('remove');
});
scene.on('shift', function (event) {
    console.log('shift');
});

/************************图片过滤****************/

$('.filters').filters();

/************************图片悬浮****************/
var sHover=new sHover("sHover","sHoverData");
sHover.set({
    // speed:7,
    // opacity:50,
    opacityChange:true
});

/************************圆环进度条****************/

$('.circle.one').circleProgress({
    value: 0.9,
    size: 200,
    startAngle:-Math.PI/2,
    fill: {color:"#70c7be"}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
});
$('.circle.two').circleProgress({
    value: 0.9,
    size: 200,
    startAngle:-Math.PI/2,
    fill: {color:"#7f92cf"}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
});
$('.circle.third').circleProgress({
    value: 0.8,
    size: 200,
    startAngle:-Math.PI/2,
    fill: {color:"#9d7ed0"}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
});
$('.circle.four').circleProgress({
    value: 0.85,
    size: 200,
    startAngle:-Math.PI/2,
    fill: {color:"#7f92cf"}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
});
$('.circle.five').circleProgress({
    value: 0.75,
    size: 200,
    startAngle:-Math.PI/2,
    fill: {color:"#9d7ed0"}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
});
$('.circle.six').circleProgress({
    value: 0.7,
    size: 200,
    startAngle:-Math.PI/2,
    fill: {color:"#70c7be"}
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').html(parseInt(100 * stepValue) + '<i>%</i>');
});

/*****************************************eCharts**********************************************/
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
option = {
    backgroundColor: '#363636',
    title: {
        text: '现居地',
        left: 'center',
        // top:100,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:'{b}',
        backgroundColor:'#000',
        padding: [5, 12]
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: true,
                textStyle:{
                    color:'#fff'
                }
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#6495ed',
                borderColor: '#333'
            },
            emphasis: {
                areaColor: '#4169e1'
            }
        }
    },
    series : [
        {
            name: '杭州',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [{name:'浙江省，杭州市',value:[120.19,30.26]}],
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{a}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);